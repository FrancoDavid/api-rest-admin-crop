const mongoose = require('mongoose');
const LOG = require('debug')('app');

const fertilizer_schema = mongoose.Schema({
    name:   {
        type: String,
        required: true
    },
    net:    {
        type:   Number,
        require: true
    },
    discription:  {
        type:  String
    },
    photo:    {
        type:   String
    },
    instance_id:    {
        type:   Number,
        required:   true
    }
});

const Fertilizer = module.exports =  mongoose.model('fertilizer', fertilizer_schema);

module.exports.get = (callback, limit) => {
    Fertilizer.find(callback).limit(limit);
}