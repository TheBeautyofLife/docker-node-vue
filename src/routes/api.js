/*!
 * api routes
 * Copyright(c) 2018 Gonzalo Plaza
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var app = require('express');
var ApiController = require('../controllers/api');
var router = app.Router();

router.route('/').get(ApiController.getIndex);

//API Routes
router.route('/status').get(ApiController.getStatus);

module.exports = router;
