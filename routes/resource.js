var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var device_controller = require('../controllers/devices');

// API ROUTE
router.get('/', api_controller.api);

// DEVICE ROUTES
router.post('/devices', device_controller.device_create_post);
router.delete('/devices/:id', device_controller.device_delete);
router.put('/devices/:id', device_controller.device_update_put);
router.get('/devices/:id', device_controller.device_detail);
router.get('/devices', device_controller.device_list);

module.exports = router;
