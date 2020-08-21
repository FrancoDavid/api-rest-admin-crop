const mongoose = require('mongoose');
const LOG = require('debug')('app');

const irrigation_schema = mongoose.Schema({
    description:   {
        type: String
    },
    date_init:    {
        type:   String,
        require: true
    },
    date_end:  {
        type:  String,
        required:   true
    },
    frecuency:    {
        type:   Number,
        required: true
    },
    total_liquid:  {
        type:   Number
    },
    total_water: {
        type:   Number
    },
    total:  {
        type:   Number,
        required:   true
    },
    list_fertilizer:  {
        type:   Array
    },
    instance_id:    {
        type:   Number,
        required:   true
    },
    plantation_id:    {
        type:   String,
        required:   true
    }
});

const Irrigation = module.exports =  mongoose.model('irrigation', irrigation_schema);

module.exports.get = (callback, limit) => {
    Irrigation.find(callback).limit(limit);
}