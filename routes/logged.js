var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

/* GET user logged in HTML. */
router.get('/logged', secured(), function (req, res, next) {
  //const { _raw, _json, ...userProfile } = req.user;
  res.render('logged.html', {
  //  userProfile: JSON.stringify(userProfile, null, 2),
    title: 'User Logged In'
  });
});




// /* GET user profile. */
// router.get('/logged', secured(), function (req, res, next) {
//   const { _raw, _json, ...userProfile } = req.user;
//   res.render('logged.html', {
//     userProfile: JSON.stringify(userProfile, null, 2),
//     title: 'Profile page'
//   });
// });

module.exports = router;
