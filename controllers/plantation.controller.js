const Plantation = require('../models/plantation.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index');
    Plantation.get((err, plantations) => {
        if (err)
            response.send(err);

        response.json({
            message: 'OK',
            data: plantations
        });
    });
}

exports.view = (request, response) => {
    LOG('exe by instance_id');
    Plantation.findById(request.params._id, (err, plantation) => {
        if  (err) 
            response.send(err);

        response.json({
            message: 'Ok',
            data: plantation
        });
    })
};

exports.new = function (req, res) {
    LOG('exe create plantation');
    var plantation = new Plantation();
    plantation.name = req.body.name;
    plantation.date_create = req.body.date_create;
    plantation.date_init = req.body.date_init;
    plantation.description = req.body.description;
    plantation.width = req.body.width;
    plantation.heigth = req.body.heigth;
    plantation.depth = req.body.depth;
    plantation.instance_id = req.body.instance_id;
    
    plantation.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New plantation created!',
                data: plantation
            });
    });
};
