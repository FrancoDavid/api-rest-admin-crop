Plantation = require('../models/plantation.model');

exports.view = (request, response) => {
    Plantation.findById(request.params.instance_id, (err, plantation) => {
        if  (err) 
            response.send(err);

        response.json({
            message: 'Ok',
            data: plantation
        });
    })
};

exports.index = (request, response) => {
    Plantation.get((err, plantations) => {
        if (err)
            response.send(err);

        response.json({
            message: 'OK',
            data: plantations
        });
    });
}
