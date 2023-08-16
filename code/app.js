var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var legoRouter = require('./routes/lego');
var carRouter = require('./routes/car');
var cusRouter = require('./routes/customer')

var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

var mongoose = require('mongoose')
var db = "mongodb+srv://nguyentrungtest2292003:mqjeZSfebuMCt3C3@cluster0.6cjjwvc.mongodb.net/toyshop"

mongoose.connect(db)
.then(()=>console.log('SUCCEED'))
.catch((err)=>console.log('FAILED'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/toy/lego', legoRouter);
app.use('/toy/car', carRouter);
app.use('/customer', cusRouter)

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

app.listen(process.env.PORT || 3001)
module.exports = app;
