const mongoose = require('mongoose');

// Define the schema for the device
const deviceSchema = new mongoose.Schema({
  device_name: { type: String, required: true },
  model: { type: String, required: true },
  power_usage: { type: Number, required: true }
});

// Create and export the Device model
const Device = mongoose.model('Device', deviceSchema);
module.exports = Device;
