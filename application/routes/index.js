var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn; // this is middleware...now mount to router
var getRecentPosts = require('../middleware/postsMiddleware').getRecentPosts;
var db = require("../config/database");

/* GET home page. */
router.get('/', getRecentPosts,function(req, res, next) {
  // res.render('index', { title: 'CSC 317 App', name:"[Juan Aguirre]" });
  res.render('index', {title: "IPa APP"});
});



router.get('/home', (req, res, next) => {
  console.log('in home page')
  res.render('index');
});

router.get('/login', (req, res, next) => {
  console.log('in login page')
  res.render('login');
});

router.get('/viewpost', (req, res, next) => {
  console.log('in viewpost page')
  res.render('viewpost');
});

router.get('/registration', (req, res, next) => { // executes when the url contains registration
  console.log('in registration page')
  res.render('registration');
});


router.use('/postimage', isLoggedIn); // using middleware whenever the /postimage path is used
router.get('/postimage', (req, res, next) => {
  // console.log('in postimage page')
  res.render('postimage', {title: "Post an Image"});
});

router.get('/post/:id(\\d+)', (req, res, next) => {
   let baseSQL="select u.username, p.title, p.dsecription, p.photopath, p.created \
   from users u \
   join posts p \
   on u.id=fk_userid \
   where p.id=?;" 

   let postId = req.params.id;
   
   db.execute(baseSQL, [postId])
   .then(([results, fields]) => {
     if(results && results.length){
        let post = results[0]
        res.render('viewpost', {currentPost: post});
     } else {
       req.flash('error', 'This is not the post you are looking for...');
       res.redirect('/')
     }
   });
})

module.exports = router;
