/*!
 * index routes
 * Copyright(c) 2016-2017 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var express = require('express');
var path = require('path');
var router = express.Router();

//Starting route
router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;
