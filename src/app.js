var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


/* ENRUTADORES*/ 

let homeRouter = require("./routes/home");

let adminRouter = require("./routes/admin");

let usersRouter = require("./routes/users");

let productsRouter = require("./routes/products")
/*FINALIZA ENRUTADORES */

/*----RUTAS---- */
app.use(methodOverride('_method'));

/*----HOME---- */
app.use('/', homeRouter);

/*----ADMIN---- */
app.use("/admin", adminRouter)

/*----USERS---- */
app.use('/users', usersRouter);

/*----PRODUCTS---- */
app.use("/products",productsRouter);




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
