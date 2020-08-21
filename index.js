const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const LOG = require('debug')('app');
const routerPlantation = require('./routes/plantation.router');
const routerPlant = require('./routes/plant.router');
const routerTool = require('./routes/tool.router');
const routerTemperature = require('./routes/temperature.router');
const routerIrrigation = require('./routes/irrigation.router');
const routerFertilizer = require('./routes/fertilizer.router');
const routerEnergyExpense = require('./routes/energy_expense.router');
const routerCycle = require('./routes/cycle.router');
const routerNotification = require('./routes/notification.router');
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

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api/plantation', routerPlantation);
app.use('/api/plant', routerPlant);
app.use('/api/tool', routerTool);
app.use('/api/temperature', routerTemperature);
app.use('/api/irrigation', routerIrrigation);
app.use('/api/fertilizer', routerFertilizer);
app.use('/api/energy-expense', routerEnergyExpense);
app.use('/api/cycle', routerCycle);
app.use('/api/notification', routerNotification);

app.listen(port, () => console.log('Running with nodemon',   port));

module.exports = mongoose;
