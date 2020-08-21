const Temperature = require('../models/temperature.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index temperature');
    Temperature.get((err, temperatures) => {
        if (err) {
            response.status(500).json({erro: err, message: 'Error! in query'})
        }

        response.status(200).json({
            message: 'Temperatures loaded',
            data: temperatures
        })
    });
}

exports.viewByPlantation = (request, response) => {
    LOG('exe by plantation temperature');
    Temperature.find(request.query, (err, temperature) => {
        if (err) {
            response.status(500).json({
                error: err,
                message: 'error! in the searching'
            });
        }
        response.status(200).json({
            message: 'Temperature details loaded',
            data: temperature
        });
    });
}

exports.new = (request, response) =>    {
    LOG('exe create temperature');
    const temperature =  new Temperature();

    temperature.max_temp_celsius = request.body.max_temp_celsius;
    temperature.min_temp_celsius = request.body.min_temp_celsius;
    temperature.location = request.body.location;
    temperature.date_register = request.body.date_register;
    temperature.max_temp_celsius_plantation = request.body.max_temp_celsius_plantation;
    temperature.min_temp_celsius_plantation = temperature.min_temp_celsius_plantation;
    temperature.max_humidity_rate_plantation = temperature.max_humidity_rate_plantation;
    temperature.min_humidity_rate_plantation = temperature.min_humidity_rate_plantation;
    temperature.plantation_id = request.body.plantation_id;
    temperature.instance_id = request.body.instance_id;
        
    temperature.save((err) => {
        if (err) {
            response.status(500).json({ error: err, message:'Temperature not create'});
        } else {
            response.status(200).json({
                message: 'New temperature created!',
                data: temperature
            });
        }            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id temperature');
    Temperature.findById(request.query, (err, temperature) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'temperature details loaded',
            data: temperature
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update temperature');
    Temperature.findById(request.body._id, (err, temperature) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'temperature not update'});
        }

        temperature.max_temp_celsius = request.body.max_temp_celsius;
        temperature.min_temp_celsius = request.body.min_temp_celsius;
        temperature.location = request.body.location;
        temperature.date_register = request.body.date_register;
        temperature.max_temp_celsius_plantation = request.body.max_temp_celsius_plantation;
        temperature.min_temp_celsius_plantation = temperature.min_temp_celsius_plantation;
        temperature.max_humidity_rate_plantation = temperature.max_humidity_rate_plantation;
        temperature.min_humidity_rate_plantation = temperature.min_humidity_rate_plantation;
        temperature.plantation_id = request.body.plantation_id;
        temperature.instance_id = request.body.instance_id;

        temperature.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'temperature not update'});
            
            response.status(200).json({
                message: 'temperature info updated',
                data: temperature
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove temperature');
    Temperature.deleteOne({_id: request.query._id}, (err, temperature) =>    {
        if (err)
            response.status(500).send({error: err, message: 'temperature not remove'});
    
    response.status(200).json({message: 'temperature deleted', data:  temperature})});
};