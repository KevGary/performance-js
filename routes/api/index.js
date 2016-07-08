var express  = require('express');
var router   = express.Router();

var _				 = require('lodash');
var deasync  = require('deasync');
var loadtest = require('loadtest');
var dLoadtest = deasync(loadtest);

//Performance Tests
router.post('/performance/run', function run(req, res, next) {
	var results = [];
	_.forEach([1,2], function(urls) {
		try {
			results.push(dLoadtest.loadTest({url: 'https://www.google.com', maxRequests: 10}));
		}
		catch(err) {
			results.push(dLoadtest.loadtest({url: 'https://www.google.com', maxRequests: 10}));
		}
	});
	return res.status(200).json({ results: results});
});

module.exports = router;