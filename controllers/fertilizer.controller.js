const Fertilizer = require('../models/fertilizer.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index fertilizer');
    Fertilizer.get((err, fertilizers) => {
        if (err)
            response.status(500).json({error:   err,    message: 'error! in query'});

        response.status(200).json({
            message: 'Fertilizers loaded',
            data: fertilizers
        });
    });
}

exports.viewByPlantation = (request, response) => {
    LOG('exe by fertilizeration');
    Fertilizer.find(request.query, (err, fertilizer) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Fertilizer details loaded',
            data: fertilizer
        });
    })
};

exports.new = (request, response) =>    {
    LOG('exe create Fertilizer');
    const fertilizer = new Fertilizer();

    fertilizer.name = request.body.name;
    fertilizer.net = request.body.net;
    fertilizer.description = request.body.description;
    fertilizer.photo = request.body.photo;
    fertilizer.instance_id = request.body.instance_id;
        
    fertilizer.save((err) => {
        if (err) {
            response.status(500).json({ error: err, message:'Fertilizer not create'});
        } else {
            response.status(200).json({
                message: 'New Fertilizer created!',
                data: fertilizer
            });
        }
            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id');
    Fertilizer.findById(request.query, (err, fertilizer) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Fertilizer details loaded',
            data: fertilizer
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update Fertilizer');
    Fertilizer.findById(request.body._id, (err, fertilizer) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'Fertilizer not update'});
        }
        LOG(fertilizer);
        fertilizer.name = request.body.name;
        fertilizer.net = request.body.net;
        fertilizer.description = request.body.description;
        fertilizer.photo = request.body.photo;
        fertilizer.instance_id = request.body.instance_id;

        fertilizer.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'Fertilizer not update'});
            
            response.status(200).json({
                message: 'Fertilizer info updated',
                data: fertilizer
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove Fertilizer');
    Fertilizer.deleteOne({_id: request.query._id}, (err, fertilizer) =>    {
        if (err)
            response.status(500).send({error: err, message: 'Fertilizer not remove'});
    
    response.status(200).json({message: 'Fertilizer deleted', data:  fertilizer})});
};