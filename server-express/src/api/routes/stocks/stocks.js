const redis = require('redis')
var stockdata = require('stock-data.js');
var { DateTime } = require('luxon');
var axios = require('axios');
var _ = require("underscore");

const bluebird = require('bluebird');
const client = redis.createClient();

bluebird.promisifyAll(redis);

var controllers = {
    getSessionSymbols: async function(req, res) {
        var reply = await client.smembersAsync("TICKERS");
        if(reply)   {
            res.send(reply);
        } else res.send('');
    },
    getCurrentPrice: async function(req, res) {
        var symbolsArray = req.body.symbols;
        var results = [];
        var tmpArray = [];

        for (let symbol of symbolsArray) {
            let reply = await client.hgetAsync("realtime", symbol);
            if (reply)
                results.push(JSON.parse(reply));
            else
                tmpArray.push(symbol);
        };

        var realtimeData = await getRealtimeData(tmpArray);
        _(realtimeData.data).each(function(response, iPos) {
            var symbol = response.symbol;
            response = JSON.stringify(response);
            client.hset("realtime", symbol, response, function(err, reply) { });
            results.push(JSON.parse(response));
        });

        res.send(results);
    },
    getHistoricalData: function(req, res)   {
        var symbol = req.query.symbol;
        var maxDate = DateTime.local();
        var minDate = maxDate.minus({days: 20}).toFormat('yyyy-MM-dd');
        maxDate = maxDate.toFormat('yyyy-MM-dd');

        client.hget("history", symbol, function(err, reply) {
            if(!reply)   {
                stockdata.historical({
                    symbol: symbol,
                    API_TOKEN: process.env.TOKEN,
                    options: {
                      date_from: minDate,
                      date_to: maxDate
                    }
                })
                .then(response => {
                    client.hset("history", symbol, JSON.stringify(response));
                    res.send(response);
                })
                .catch(error => {
                    res.send(error);
                });
            } else{
                res.send(reply);
            }
        });
    }
}

async function getRealtimeData(symbolsArray)  {

    if( !symbolsArray || symbolsArray.length == 0 )
        return [];

    var url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=' + symbolsArray.join();
    url += '&api_token=' + process.env.TOKEN;

    var result = await axios.get(url);
    return result.data;
}

module.exports = controllers;
