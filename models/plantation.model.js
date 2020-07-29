const mongoose = require('mongoose');
const LOG = require('debug')('app');

const plantation_squema = mongoose.Schema({
    name:   {
        type: String,
        required:   true
    },
    date_create:    {
        type:   String,
    },
    date_init:  {
        type:  String,
        required:   true
    },
    description:    {
        type:   String
    },
    width:  {
        type:   Number
    },
    heigth: {
        type:   Number
    },
    depth:  {
        type:   Number
    },
    instance_id:    {
        type:   Number,
        required:   true
    }
});

const Plantation = module.exports =  mongoose.model('plantation', plantation_squema);

module.exports.get = function (callback, limit) {
    Plantation.find(callback).limit(limit);
}