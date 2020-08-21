const Tool = require('../models/tool.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index tool');
    Tool.get((err, tools) => {
        if (err) {
            response.status(500).json({erro: err, message: 'Error! in query'})
        }

        response.status(200).json({
            message: 'Tools loaded',
            data: tools
        })
    });
}

exports.viewByPlantation = (request, response) => {
    LOG('exe by plantation tool');
    Tool.find(request.query, (err, tool) => {
        if (err) {
            response.status(500).json({
                error: err,
                message: 'error! in the searching'
            });
        }
        response.status(200).json({
            message: 'Tool details loaded',
            data: tool
        });
    });
}

exports.new = (request, response) =>    {
    LOG('exe create tool');
    const tool =  new Tool();

    tool.name = request.body.name;
    tool.description = request.body.description;
    tool.watts_comsumption = request.body.watts_comsumption;
    tool.plantation_id = request.body.plantation_id;
    tool.instance_id = request.body.instance_id;
        
    tool.save((err) => {
        if (err) {
            response.status(500).json({ error: err, message:'Tool not create'});
        } else {
            response.status(200).json({
                message: 'New tool created!',
                data: tool
            });
        }            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id tool');
    Tool.findById(request.query, (err, tool) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'tool details loaded',
            data: tool
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update tool');
    Tool.findById(request.body._id, (err, tool) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'tool not update'});
        }

        tool.name = request.body.name;
        tool.description = request.body.description;
        tool.watts_comsumption = request.body.watts_comsumption;
        tool.plantation_id = request.body.plantation_id;
        tool.instance_id = request.body.instance_id;

        tool.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'tool not update'});
            
            response.status(200).json({
                message: 'tool info updated',
                data: tool
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove tool');
    Tool.deleteOne({_id: request.query._id}, (err, tool) =>    {
        if (err)
            response.status(500).send({error: err, message: 'tool not remove'});
    
    response.status(200).json({message: 'tool deleted', data:  tool})});
};