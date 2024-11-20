var Device = require('../models/device');

// List all devices
exports.device_list = async function(req, res) {
  try {
    const devices = await Device.find().exec();
    res.json(devices);
  } catch (err) {
    console.error('Error fetching devices:', err);
    res.status(500).json({"error": `${err.message}`});
  }
};
// VIEWS
// Handle a show all view
exports.device_view_all_Page = async function(req, res) {
  try{
  thedevices = await device.find();
  res.render('devices', { title: 'device Search Results', results: thedevices });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };

// Detail for a specific device
exports.device_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await device.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
  };
  

// Handle device creation on POST
exports.device_create_post = async function(req, res) {
  console.log(req.body);

  let device = new Device({
    device_name: req.body.device_name,
    model: req.body.model,
    power_usage: req.body.power_usage
  });

  try {
    let result = await device.save();
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating device:', err);
    res.status(500).json({"error": `${err.message}`});
  }
};

// Handle device delete on DELETE
exports.device_delete = function(req, res) {
  res.send('Device delete DELETE not implemented');
};

// Handle device update on PUT
// Handle Device update form on PUT
exports.device_update_put = async function (req, res) {
  console.log(`Received PUT request for id: ${req.params.id}`);
  console.log('Request body:', req.body);

  try {
    let toUpdate = await Device.findById(req.params.id);
    console.log('Found device:', toUpdate);

    if (req.body.device_name) toUpdate.device_name = req.body.device_name;
    if (req.body.model) toUpdate.model = req.body.model;
    if (req.body.power_usage) toUpdate.power_usage = req.body.power_usage;

    let result = await toUpdate.save();
    console.log('Updated device:', result);
    res.send(result);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).send({ error: `${err}: Update for id ${req.params.id} failed` });
  }
};
// Handle device delete on DELETE.
exports.device_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await Device.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};
exports.device_view_one_Page = async function(req, res) {
  console.log("single view for ID " + req.query.id);
  try {
    result = await Device.findById(req.query.id);
    res.render('devicedetail', { title: 'Device Detail', toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};
// Handle building the view for creating a device.
// No body, no in path parameter, no query.
// Does not need to be async
exports.device_create_Page = function(req, res) {
  console.log("create view")
  try{
  res.render('devicecreate', { title: 'device Create'});
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };
  // Handle building the view for updating a costume.
// query provides the id
exports.costume_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Costume.findById(req.query.id)
res.render('costumeupdate', { title: 'Costume Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
  