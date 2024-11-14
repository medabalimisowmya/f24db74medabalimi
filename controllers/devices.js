// controllers/devices.js

// Import the model
var Device = require('../models/device');

// List of all devices
exports.device_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Device list');
};

// Detail for a specific device
exports.device_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Device detail: ' + req.params.id);
};

// Handle device create on POST
exports.device_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Device create POST');
};

// Handle device delete on DELETE
exports.device_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Device delete DELETE ' + req.params.id);
};

// Handle device update on PUT
exports.device_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Device update PUT ' + req.params.id);
};
