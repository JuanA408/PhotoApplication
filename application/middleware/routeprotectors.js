const {successPrint, errorPrint} = require("../helpers/debug/debugprinters");
const routeProtector = {};

routeProtector.userIsLoggedIn = function(req, res, next) {
    if(req.session.username) {
        successPrint('User is logged in')
        next();
    } else {
        errorPrint('user is not logged in');
        req.flash('error', 'You must be logged in to create a post!');
        res.redirect('/login');
    }
}

module.exports = routeProtector;

//middleware functions are hooked on chains
// diagram: m1 -> m2 -> m3 -> router.httpverb       !!!next() is use to go to the next middleware (m)
// if one m breaks then redirect and go back to the beginning