const redis = require('redis')
const client = redis.createClient();

// create redis middleware
let redisMiddleware = (req, res, next) => {
    let key = "__expIress__" + req.originalUrl || req.url;
    client.get(key, function (err, reply) {
        if (reply) {
            res.send(JSON.parse(reply));
        } else {
            res.sendResponse = res.send;
            res.send = (body) => {
                client.set(key, JSON.stringify(body));
                res.sendResponse(body);
            }
            next();
        }
    });
};

module.exports = redisMiddleware;