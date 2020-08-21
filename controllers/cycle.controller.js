const Cycle = require('../models/cycle.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index CYCLE');
    Cycle.get((err, cycles) => {
        if (err)
            response.status(500).json({error:   err,    message: 'error! in query'});

        response.status(200).json({
            message: 'Cycles loaded',
            data: cycles
        });
    });
}

exports.viewByPlantation = (request, response) => {
    LOG('exe by planttion cycle');
    Cycle.find(request.query, (err, cycles) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Cycle details loaded',
            data: cycles
        });
    })
};

exports.new = (request, response) =>    {
    LOG('exe create Cycle');
    const cycle = new Cycle();

    cycle.name = request.body.name;
    cycle.date_init = request.body.date_init;
    cycle.date_end = request.body.date_end;
    cycle.description = request.body.description;
    cycle.temp_max_idea_celsius = request.body.temp_max_idea_celsius;
    cycle.temp_min_idea_celsius = request.body.temp_min_idea_celsius;
    cycle.humidity_max_idea_rate = request.body.humidity_max_idea_rate;
    cycle.humididy_min_idea_rate = request.body.humididy_min_idea_rate;
    cycle.duration_week = request.body.duration_week;
    cycle.hour_ligth = request.body.hour_ligth;
    cycle.hour_dark = request.body.hour_dark;
    cycle.plantation_id = request.body.plantation_id;
    cycle.instance_id = request.body.instance_id;
 
    cycle.save((err) => {
        if (err) {
            response.status(500).json({ error: err, message:'Cycle not create'});
        } else {
            response.status(200).json({
                message: 'New Cycle created!',
                data: cycle
            });
        }
            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id');
    Cycle.findById(request.query, (err, cycle) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Cycle details loaded',
            data: cycle
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update Cycle');
    Cycle.findById(request.body._id, (err, cycle) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'Cycle not update'});
        }

        cycle.name = request.body.name;
        cycle.date_init = request.body.date_init;
        cycle.date_end = request.body.date_end;
        cycle.description = request.body.description;
        cycle.temp_max_idea_celsius = request.body.temp_max_idea_celsius;
        cycle.temp_min_idea_celsius = request.body.temp_min_idea_celsius;
        cycle.humidity_max_idea_rate = request.body.humidity_max_idea_rate;
        cycle.humididy_min_idea_rate = request.body.humididy_min_idea_rate;
        cycle.duration_week = request.body.duration_week;
        cycle.hour_ligth = request.body.hour_ligth;
        cycle.hour_dark = request.body.hour_dark;
        cycle.plantation_id = request.body.plantation_id;
        cycle.instance_id = request.body.instance_id;

        cycle.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'Cycle not update'});
            
            response.status(200).json({
                message: 'Cycle info updated',
                data: cycle
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove Cycle');
    Cycle.deleteOne({_id: request.query._id}, (err, cycle) =>    {
        if (err)
            response.status(500).send({error: err, message: 'Cycle not remove'});
    
    response.status(200).json({message: 'Cycle deleted', data:  cycle})});
};