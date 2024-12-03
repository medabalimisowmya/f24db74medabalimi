var express = require('express');
var router = express.Router();
var passport = require('passport'); // Add passport require
var Device = require('../models/device'); // Correct model import
const device_controller = require('../controllers/devices');




// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 }

/* GET devices page - List all devices */
router.get('/', device_controller.device_view_all_Page );
router.get('/detail', device_controller.device_view_one_Page);

router.get('/create', device_controller.device_create_Page);
/* GET create update page */
router.get('/update',secured, device_controller.device_update_Page);
/* GET delete device page */
router.get('/delete', device_controller.device_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });
// Declare the secured function first



module.exports = router;