const Plant = require('../models/plant.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index plant');
    Plant.get((err, plants) => {
        if (err)
            response.status(500).json({error:   err,    message: 'error! in query'});

        response.status(200).json({
            message: 'Plants loaded',
            data: plants
        });
    });
}

exports.viewByPlantation = (request, response) => {
    LOG('exe by plantation');
    Plant.find(request.query, (err, plant) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Plant details loaded',
            data: plant
        });
    })
};

exports.new = (request, response) =>    {
    LOG('exe create Plant');
    const Plant = new Plant();

    Plant.nick_name = request.body.nick_name;
    Plant.name_kind = request.body.name_kind;
    Plant.type_origin = request.body.type;
    Plant.photo = request.body.photo;
    Plant.width = request.body.width;
    Plant.heigth = request.body.heigth;
    Plant.kind_plant = request.body.kind_plant;
    Plant.sex = request.body.sex;
    Plant.circle_life = request.body.circle_life;
    Plant.plantation_id = request.body.plantation_id;
    Plant.instance_id = request.body.instance_id;
    
    Plant.save((err) => {
        if (err) {
            response.status(500).json({ error: err, message:'Plant not create'});
        } else {
            response.status(200).json({
                message: 'New Plant created!',
                data: Plant
            });
        }
            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id');
    Plant.findById(request.query, (err, plant) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Plant details loaded',
            data: plant
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update Plant');
    Plant.findById(request.body._id, (err, plant) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'Plant not update'});
        }
        plant.nick_name = request.body.nick_name;
        plant.name_kind = request.body.name_kind;
        plant.type_origin = request.body.type;
        plant.photo = request.body.photo;
        plant.width = request.body.width;
        plant.heigth = request.body.heigth;
        plant.kind_plant = request.body.kind_plant;
        plant.sex = request.body.sex;
        plant.circle_life = request.body.circle_life;
        plant.plantation_id = request.body.plantation_id;
        plant.instance_id = request.body.instance_id;

        Plant.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'Plant not update'});
            
            response.status(200).json({
                message: 'Plant info updated',
                data: plant
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove Plant');
    Plant.deleteOne({_id: request.query._id}, (err, plant) =>    {
        if (err)
            response.status(500).send({error: err, message: 'Plant not remove'});
    
    response.status(200).json({message: 'Plant deleted', data:  plant})});
};