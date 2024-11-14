// controllers/devices.js

// Import the model
var Device = require('../models/device');

// List of all devices (Fetch all devices)
exports.device_list = async function(req, res) {
  try {
    // Fetch all devices from MongoDB
    const devices = await Device.find();  // This does not modify the database
    res.json(devices);  // Send the list of devices as a JSON response
  } catch (err) {
    console.error('Error fetching devices:', err);
    res.status(500).send(`{"error": ${err}}`);  // Send error if any
  }
};

// Detail for a specific device (Fetch details of a single device)
exports.device_detail = async function(req, res) {
  try {
    const device = await Device.findById(req.params.id);  // Fetch device by ID
    if (device) {
      res.json(device);  // Send the details of the device
    } else {
      res.status(404).send('Device not found');
    }
  } catch (err) {
    console.error('Error fetching device details:', err);
    res.status(500).send(`{"error": ${err}}`);  // Send error if any
  }
};

// Handle device create on POST (Not implemented in your case yet)
exports.device_create_post = function(req, res) {
  res.send('Device create POST not implemented');
};

// Handle device delete on DELETE (Not implemented in your case yet)
exports.device_delete = function(req, res) {
  res.send('Device delete DELETE not implemented');
};

// Handle device update on PUT (Not implemented in your case yet)
exports.device_update_put = function(req, res) {
  res.send('Device update PUT not implemented');
};
