const mongoose = require('mongoose');
const LOG = require('debug')('app');

const cycle_schema = mongoose.Schema({
    name:   {
        type: String,
        required: true
    },
    date_init:    {
        type:   String,
        required: true
    },
    date_end:  {
        type:  String,
        required: true
    },
    description:  {
        type:  String
    },
    temp_max_idea_celsius:  {
        type:  Number,
        required: true
    },
    temp_min_idea_celsius:  {
        type:  Number,
        required: true
    },
    humidity_max_idea_rate:  {
        type:  Number,
        required: true
    },
    humidity_min_idea_rate: {
        type: Number,
        required: true
    },
    duration_week:  {
        type:  Number,
        required: true
    },
    hour_ligth:  {
        type:  Number,
        required: true
    },
    hour_dark:  {
        type:  Number,
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

const Cycle = module.exports =  mongoose.model('cycle', cycle_schema);

module.exports.get = (callback, limit) => {
    Cycle.find(callback).limit(limit);
}