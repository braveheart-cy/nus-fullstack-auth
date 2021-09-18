var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.pug', { title: 'Auth0 Webapp sample Nodejs' });
});

module.exports = router;
