const Irrigation = require('../models/irrigation.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index irrigation');
    Irrigation.get((err, irrigations) => {
        if (err)
            response.status(500).json({error:   err,    message: 'error! in query'});

        response.status(200).json({
            message: 'Irrigations loaded',
            data: irrigations
        });
    });
}

exports.viewByPlantation = (request, response) => {
    LOG('exe by irrigationation');
    Irrigation.find(request.query, (err, irrigation) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Irrigation details loaded',
            data: irrigation
        });
    })
};

exports.new = (request, response) =>    {
    LOG('exe create Irrigation');
    const irrigation = new Irrigation();

    irrigation.description = request.body.description;
    irrigation.date_init = request.body.date_init;
    irrigation.date_end = request.body.date_end;
    irrigation.frecuency = request.body.frecuency;
    irrigation.total_liquid = request.body.total_liquid;
    irrigation.total_water = request.body.total_water;
    irrigation.total = request.body.total;
    irrigation.list_fertilizer = request.body.list_fertilizer;
    irrigation.instance_id = request.body.instance_id;
    irrigation.plantation_id = request.body.plantation_id;
        
    irrigation.save((err) => {
        if (err) {
            response.status(500).json({ error: err, message:'Irrigation not create'});
        } else {
            response.status(200).json({
                message: 'New Irrigation created!',
                data: irrigation
            });
        }
            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id');
    Irrigation.findById(request.query, (err, irrigation) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Irrigation details loaded',
            data: irrigation
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update Irrigation');
    Irrigation.findById(request.body._id, (err, irrigation) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'Irrigation not update'});
        }
        LOG(irrigation);
        irrigation.description = request.body.description;
        irrigation.date_init = request.body.date_init;
        irrigation.date_end = request.body.date_end;
        irrigation.frecuency = request.body.frecuency;
        irrigation.total_liquid = request.body.total_liquid;
        irrigation.total_water = request.body.total_water;
        irrigation.total = request.body.total;
        irrigation.list_fertilizer = request.body.list_fertilizer;
        irrigation.instance_id = request.body.instance_id;
        irrigation.plantation_id = request.body.plantation_id;

        irrigation.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'Irrigation not update'});
            
            response.status(200).json({
                message: 'Irrigation info updated',
                data: irrigation
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove Irrigation');
    Irrigation.deleteOne({_id: request.query._id}, (err, irrigation) =>    {
        if (err)
            response.status(500).send({error: err, message: 'Irrigation not remove'});
    
    response.status(200).json({message: 'Irrigation deleted', data:  irrigation})});
};