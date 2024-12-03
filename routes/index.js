var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');

// Route for the homepage
router.get('/', function (req, res) {
  res.render('index', { title: 'Device App', user: req.user });
});

// Route for the registration page
router.get('/register', function(req, res) {
  res.render('register', { title: 'Device App Registration' });
});

// POST route for registration
router.post('/register', function(req, res) {
  Account.findOne({ username: req.body.username })
    .then(function (user) {
      if (user != null) {
        console.log("exists " + req.body.username);
        return res.render('register', {
          title: 'Registration', 
          message: 'Existing User', 
          account: req.body.username
        });
      }

      let newAccount = new Account({ username: req.body.username });
      Account.register(newAccount, req.body.password, function(err, user) {
        if (err) {
          console.log("db creation issue " + err);
          return res.render('register', {
            title: 'Registration', 
            message: 'access error', 
            account: req.body.username
          });
        }

        if (!user) {
          return res.render('register', {
            title: 'Registration', 
            message: 'access error', 
            account: req.body.username
          });
        }
      });

      console.log('Success, redirect');
      res.redirect('/');
    })
    .catch(function (err) {
      return res.render('register', {
        title: 'Registration', 
        message: 'Registration error', 
        account: req.body.username
      });
    });
});

// Route for login page
router.get('/login', function(req, res) {
  res.render('login', { title: 'Device App Login', user: req.user });
});

// POST route for login
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

// Route for logout
router.get('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Ping route for testing
router.get('/ping', function(req, res) {
  res.status(200).send("pong!");
});

module.exports = router;
