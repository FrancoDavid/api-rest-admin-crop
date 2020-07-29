const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const LOG = require('debug')('app');
const router_plantation = require('./routes/plantation.router');
const router_plant = require('./routes/plant.router');
const router = require('express').Router();
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:    true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/control_cultivo', {useNewUrlParser:   true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
  console.log('connected'); // si esta todo ok, imprime esto
});


// route middleware that will happen on every request
router.use(function(req, res, next) {

  // log each request to the console
  console.log(req.method, req.url);

  // continue doing what we were doing and go to the route
  next(); 
});

app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/plantation',  router_plantation);
app.use('/plant', router_plant);

app.listen(port, () => console.log('Running with nodemon',   port));

module.exports = mongoose;
