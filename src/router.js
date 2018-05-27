/**
 * Module dependencies.
 * @private
 */
var path = require('path');
var indexRoute = require('./routes/index');
var apiRoute = require('./routes/api');

/**
 * Module exports.
 */
module.exports = function(express, app) {
	app.use('/', express.static(path.join(__dirname, '../public')));
	app.use('/', indexRoute);
	app.use('/api/v1', apiRoute);
	app.use('*', indexRoute);
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	app.use(function(err, req, res, next) {
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};
		console.log(err.status + ' - ' + err.message);

		res.status(err.status || 500).sendFile('404.html', {
			root: path.join(__dirname, '../public'),
			dotfiles: 'deny',
			headers: {
				'x-timestamp': Date.now(),
				'x-sent': true
			}
		});
	});
};
