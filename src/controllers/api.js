var config = require('config');

exports.getIndex = function(req, res) {
    res.status(200).jsonp({
        'success': true,
        'message': 'API response received'
    });
};

exports.getStatus = function(req, res) {
    res.status(200).jsonp({
        'success': true,
        'message': 'API response received'
    });
};

