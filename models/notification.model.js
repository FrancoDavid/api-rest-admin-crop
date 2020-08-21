const mongoose = require('mongoose');
const LOG = require('debug')('app');

const notification_schema = mongoose.Schema({
    name:   {
        type: String,
        required: true
    },
    type:    {
        type:   String,
        required: true
    },
    from:  {
        type:  String,
        required: true
    },
    description:  {
        type:  String
    },
    date:  {
        type: String,
        required: true
    },
    plantation_id:    {
        type:   String,
        required: true
    },
    instance_id:    {
        type:   Number,
        required:   true
    }
});

const Notification = module.exports =  mongoose.model('notification', notification_schema);

module.exports.get = (callback, limit) => {
    Notification.find(callback).limit(limit);
}