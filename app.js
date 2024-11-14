var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config(); // Add this line to load environment variables

var mongoose = require('mongoose'); // Add this line to require mongoose
var connectionString = process.env.MONGO_CON; // Use your connection string from .env

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var devicesRouter = require('./routes/devices'); // This is the correct route
var gridRouter = require('./routes/grid');
var randomItemRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource'); // Import the resource router

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/devices', devicesRouter);  // Correct route for devices
app.use('/grid', gridRouter);
app.use('/randomitem', randomItemRouter);

// Add the resource route to handle CRUD operations for devices
app.use('/resource', resourceRouter); // Use the resource router for all resource-related API endpoints

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
