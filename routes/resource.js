// routes/resource.js

var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var device_controller = require('../controllers/devices');

// API Route for listing resources
router.get('/', api_controller.api);

// DEVICE ROUTES
router.post('/devices', device_controller.device_create_post); // Create a device
router.delete('/devices/:id', device_controller.device_delete); // Delete a device
router.put('/devices/:id', device_controller.device_update_put); // Update a device
router.get('/devices/:id', device_controller.device_detail); // Get details for a device
router.get('/devices', device_controller.device_list); // List all devices

module.exports = router;
