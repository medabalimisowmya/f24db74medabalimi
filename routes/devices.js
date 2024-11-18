var express = require('express');
var router = express.Router();

var Device = require('../models/device'); // Correct model import
const device_controller = require('../controllers/devices');

/* GET devices page - List all devices */
router.get('/', device_controller.device_view_all_Page );
router.get('/detail', device_controller.device_view_one_Page);

router.get('/create', device_controller.device_create_Page);
module.exports = router;