const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PUBLIC_PATH = path.join(__dirname, '../public');
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = ({ indexRoute, usersRoute, servicesRoute}) => {

  const app = express();

  // view engine setup
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(sassMiddleware({
    src: PUBLIC_PATH,
    dest: PUBLIC_PATH,
    debug: isDev,
  }));
  app.use(express.static(PUBLIC_PATH));

  app.use('/', indexRoute);
  app.use('/services', servicesRoute);
  app.use('/users', usersRoute);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
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

  return app;
};
