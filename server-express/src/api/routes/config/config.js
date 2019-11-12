var express = require('express');
var router = express.Router();
const redis = require('redis')
const client = redis.createClient();

router.get('/', function(req, res, next) {
    client.smembers("TICKERS", function(err, reply)    {
        res.send(reply);
    });
});

router.post('/', function(req,res){
    var symbol = req.body.symbol;

    client.sismember("TICKERS", symbol, function(err, reply)   {
        if(!reply || reply <=0) {
            client.sadd("TICKERS", symbol, function(err, reply) {
                if(reply)   {
                    client.smembers("TICKERS", function(err, reply)    {
                        res.send(reply);
                    });
                }
            });
        }
    });
});

module.exports = router;
