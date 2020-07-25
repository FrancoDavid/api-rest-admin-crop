const Plantation = require('../models/plantation.model');
const LOG = require('debug')('app');

exports.view = (request, response) => {
    Plantation.findById(request.params._id, (err, plantation) => {
        if  (err) 
            response.send(err);

        response.json({
            message: 'Ok',
            data: plantation
        });
    })
};

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
