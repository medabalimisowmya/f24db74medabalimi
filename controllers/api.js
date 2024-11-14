// controllers/api.js

exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"devices", ');
    res.write(' "verbs":["GET","POST", "PUT", "DELETE"] ');
    res.write('}');
    res.write(']');
    res.send();
};
