let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let router_plantation = require('./routes/plantation.router');

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:    true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhots:27017/control_cultivo', {useNewUrlParser:   true, useUnifiedTopology: true});

let db = mongoose.connect;

if (!db) {
    console.error('Not connect db, reset connection');
} else {
    console.log('Connect stablesh');
}

app.use('/api', router_plantation);

app.listen(port, () => console.log('Running with nodemon',   port));
