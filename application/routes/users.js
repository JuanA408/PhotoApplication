var express = require('express');
var router = express.Router();
var db = require('../config/database'); // this is the connection pool
const UserError = require('../helpers/error/UserError');
const {errorPrint, successPrint} = require("../helpers/debug/debugprinters");// in order to use code from another file
var bcrypt = require('bcrypt');
const sessions = require('express-session');
const mysqlSession = require('express-mysql-session')(sessions);
const {registerValidator} = require("../middleware/validation");


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', registerValidator, (req, res, next) => {  // do validation on the backend too // can add as many validators , , , as you would like but make sure to include next in each validator
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let confirmPassword = req.body.confirmPassword;

  // Do server side validation
  db.execute("SELECT * FROM users where username=?", [username])
  .then(([results, fields])=> {
    if(results && results.length == 0){
      console.log("made it to username")
      return db.execute("SELECT * FROM users WHERE email=?", [email]);
    } else {
      throw new UserError(
        "Registration Failed: username already exists",
        "/registration",
        200
      );
    }
  })
  .then(([results, fields]) => {
    if(results && results.length == 0) {
     return bcrypt.hash(password, 15);
    } else {
      throw new UserError(
        "Registration Failed: email already exists",
        "/registration", 
        200);
    }
  })
  .then((hashedPassword) => {

      let baseSQL = "INSERT INTO users (username, email, password, created) VALUES (?,?,?,now());"
      return db.execute(baseSQL, [username, email, hashedPassword])

  })
  .then(([results, fields]) => {
    if(results && results.affectedRows) {
      console.log("Made it to successful created")
      successPrint("User.js --> was created!!");
      req.flash('success', 'User account has been made!');
      res.redirect('/login');
    } else {
      throw new UserError(
        "Server Error, user could not be created",
        "/registration",
        500
      );
    }
  })
  .catch((err) => {
    errorPrint("user could not be made", err);
    if(err instanceof UserError) {
      errorPrint(err.getMessage());
      req.flash('error', err.getMessage());
      res.status(err.getStatus());
      res.redirect(err.getRedirectURL());
    } else {
      next(err);
    }
  })

});


router.post('/login', (req, res, next)=> {
  let username = req.body.username;
  let password = req.body.password;

  /* Do server side validation */

  // let baseSQL = "SELECT username, password FROM users WHERE username=?;"
  let baseSQL = "SELECT id, username, password FROM users WHERE username=?;"
  let userId;
  db.execute(baseSQL, [username])
    .then(([results, fields]) => {
      if(results && results.length == 1) {
        let hashedPassword = results[0].password;
        userId = results[0].id;
        return bcrypt.compare(password, hashedPassword);

      } else {
        throw new UserError("invalid username and/or password!", "/login", 200);
      }
    })
    .then((passwordsMatched) => {
      if(passwordsMatched) {
        successPrint(`User ${username} is logged in`);
        req.session.username = username;
        req.session.userId = userId;
        res.locals.logged = true;
        req.flash('success', 'You have been successfully Logged in!');
        res.redirect('/');
      } else{
        throw new UserError("Invalid username and/or password!", "/login", 200);
      }
    })
    .catch((err) => {
      errorPrint("user login failed");
      if(err instanceof UserError){
        errorPrint(err.getMessage());
        req.flash('error', err.getMessage());
        res.status(err.getStatus());
        res.redirect('/login');
      } else {
        next(err);
      }
    })

})

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if(err) {
      errorPrint('session could not be destroyed.')
      next(err);
    }else {
      successPrint('Session was destroyed');
      res.clearCookie('csid');
      res.json({status: "OK", message: "user is logged out"});
    }
  });
});

module.exports = router;


// successPrint(`User ${username} is logged in`);
// res.locals.logged = true;
// res.render('index');