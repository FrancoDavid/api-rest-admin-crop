const Plantation = require('../models/plantation.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index');
    Plantation.get((err, plantations) => {
        if (err)
            response.status(500).json({error:   err,    message: 'error! in query'});

        response.status(200).json({
            message: 'Plantations loaded',
            data: plantations
        });
    });
}

exports.viewByInstance = (request, response) => {
    LOG('exe by instance');
    Plantation.find(request.query, (err, plantation, next) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Plantation details loaded',
            data: plantation
        });
    })
};

exports.new = (request, response) =>    {
    LOG('exe create plantation');
    const plantation = new Plantation();
    plantation.name = request.body.name;
    plantation.date_create = request.body.date_create;
    plantation.date_init = request.body.date_init;
    plantation.description = request.body.description;
    plantation.width = request.body.width;
    plantation.heigth = request.body.heigth;
    plantation.depth = request.body.depth;
    plantation.instance_id = request.body.instance_id;
    
    plantation.save(function (err) {
        if (err) {
            response.status(500).json({ error: err, message:'Plantation not create'});
        } else {
            response.status(200).json({
                message: 'New plantation created!',
                data: plantation
            });
        }
            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id');
    Plantation.findById(request.query, (err, plantation) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Plantation details loaded',
            data: plantation
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update plantation');
    Plantation.findById(request.body._id, (err, plantation) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'Plantation not update'});
        }
        plantation.name = request.body.name;
        plantation.date_create = request.body.date_create;
        plantation.date_init = request.body.date_init;
        plantation.description = request.body.description;
        plantation.width = request.body.width;
        plantation.heigth = request.body.heigth;
        plantation.depth = request.body.depth;
        plantation.instance_id = request.body.instance_id;

        plantation.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'Plantation not update'});
            
            response.status(200).json({
                message: 'Plantation info updated',
                data: plantation
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove plantation');
    Plantation.deleteOne({_id: request.query._id}, (err, plantation) =>    {
        if (err)
            response.status(500).send({error: err, message: 'Plantation not remove'});
    
    response.status(200).json({message: 'Plantation deleted', data:  plantation})});
};




