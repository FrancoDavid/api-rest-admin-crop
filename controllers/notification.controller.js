const Notification = require('../models/notification.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index notification');
    Notification.get((err, notifications) => {
        if (err)
            response.status(500).json({error:   err,    message: 'error! in query'});

        response.status(200).json({
            message: 'Notifications loaded',
            data: notifications
        });
    });
}

exports.viewByPlantation = (request, response) => {
    LOG('exe by notificationation');
    Notification.find(request.query, (err, notification) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Notification details loaded',
            data: notification
        });
    })
};

exports.new = (request, response) =>    {
    LOG('exe create Notification');
    const notification = new Notification();

    notification.name = request.body.name;
    notification.type = request.body.type;
    notification.from = request.body.from;
    notification.description = request.body.description;
    notification.date = request.body.date;
    notification.plantation_id = request.body.plantation_id;
    notification.instance_id = request.body.instance_id;
        
    notification.save((err) => {
        if (err) {
            response.status(500).json({ error: err, message:'Notification not create'});
        } else {
            response.status(200).json({
                message: 'New Notification created!',
                data: notification
            });
        }
            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id');
    Notification.findById(request.query, (err, notification) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'Notification details loaded',
            data: notification
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update Notification');
    Notification.findById(request.body._id, (err, notification) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'Notification not update'});
        }
        LOG(notification);
        notification.name = request.body.name;
        notification.type = request.body.type;
        notification.from = request.body.from;
        notification.description = request.body.description;
        notification.date = request.body.date;
        notification.plantation_id = request.body.plantation_id;
        notification.instance_id = request.body.instance_id;
        

        notification.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'Notification not update'});
            
            response.status(200).json({
                message: 'Notification info updated',
                data: notification
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove Notification');
    Notification.deleteOne({_id: request.query._id}, (err, notification) =>    {
        if (err)
            response.status(500).send({error: err, message: 'Notification not remove'});
    
    response.status(200).json({message: 'Notification deleted', data:  notification})});
};