var express = require('express');
var router = express.Router();
var redisMiddleware = require('../../middleware/cache')
var stockdata = require('stock-data.js');

router.get('/', redisMiddleware, function(req, res, next) {
    var symbol = req.query.symbol;
    stockdata.search({
        search_term: symbol,
        API_TOKEN: process.env.TOKEN
    })
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error);
    });
});

module.exports = router;
