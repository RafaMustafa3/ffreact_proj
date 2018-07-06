"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressRateLimit = require('express-rate-limit');

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _envLogger = require('./utils/env-logger');

var _envLogger2 = _interopRequireDefault(_envLogger);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This function is just a helper to let you know how is the server running without inspecting npm scripts. */
/* If it bothers, you can delete it right now. */
(0, _envLogger2.default)(process.env.ENV);

var app = (0, _express2.default)();

/* Rate limiter */
var limiter = new _expressRateLimit2.default({
    windowMs: 1000, // 1 minute
    max: 25, // Limit each IP to 100 requests per windowMs
    delayMs: 0 // Disable delaying - Full speed until the max limit is reached
});

/* Applying rate limiter to all requests */
app.use(limiter);

/* Setting secure headers */
app.use((0, _helmet2.default)());

/* Template engine */
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* Morgan logger */
app.use((0, _morgan2.default)('dev'));

/* Body parsing */
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));
app.use((0, _cookieParser2.default)());

/* Statinc serving */
app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

/* Main routing */
app.use('/', _index2.default);

/* 404 handling */
app.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});

/* 500 handling */
if (process.env.ENV === 'dev') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            status: err.status,
            error: err
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        status: err.status,
        err: {}
    });
});

module.exports = app;