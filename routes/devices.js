var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('devices', { title: 'Search Results for Devices' });
});

module.exports = router;
