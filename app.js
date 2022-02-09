
require("dotenv").config(); //require app config
require("./config/mongo"); // database initial setup
//require("./config/cloudinary") //TEST ONLY


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require("hbs")
const cors = require("cors");

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api')
var usersRouter = require('./routes/users');

var app = express();

require("./config/cors")(app)

//Passport configuration -- ------  --------- ------------  ----------- ------------------------------------------------------------
// Packages used for authentication (Session & Passport)
const session = require('express-session');
const passport = require('passport');
 
// Passport initial setup
require('./config/passport');

// Session settings: allows our app to maintain the sessions and our users in it
app.use(
  session({
    secret: 'some secret goes here',
    resave: true,
    saveUninitialized: false
  })
);

// To allow our app to use passport for auth
app.use(passport.initialize());
app.use(passport.session());

//Passport configuration -- ------  --------- ------------  ----------- ------------------------------------------------------------




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// ROUTES MIDDLEWARE STARTS HERE:
 
const authRouter = require('./routes/auth'); // <== has to be added
const { use } = require("passport");
app.use('/api', authRouter); // <== has to be added



//deactivated while we don't have a user model
//app.use('/users', usersRouter);

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
