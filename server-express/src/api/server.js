var express = require('express');
var createError = require('http-errors');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

var indexRouter = require('./routes');

app.use('/api', indexRouter);

app.get('/config', function(req, res, next) {
  res.render('config', { title: 'Express' });
});

app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(port, () => {
    console.log(`Stocks backend app listening on port ${port}!`)
});
