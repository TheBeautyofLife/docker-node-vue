/*!
 * app
 * Copyright(c) 2018 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * App dependencies.
 * @private
 */
var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");

/**
 * View engine.
 * @private
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.use(favicon(path.join(__dirname, '../dist', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser());

/**
 * App modules.
 * @private
 */
var router = require('./router')(express, app);
var logger = require('./logger')(app);

module.exports = app;