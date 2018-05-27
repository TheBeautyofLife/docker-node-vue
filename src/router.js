/**
 * Module dependencies.
 * @private
 */
var path = require('path');
var index = require('./routes/index');

/**
 * Module exports.
 */
module.exports = function(express, app) {
    app.use('/', express.static(path.join(__dirname, '../public')));
    app.use('/', index);
    app.use('*', index);
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        var options = {
            root: path.join(__dirname, '../public'),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };

        console.log(err.status + ' - ' + err.message);
        res.status(err.status || 500).sendFile('404.html', options);
    });
};