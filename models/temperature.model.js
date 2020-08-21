const mongoose = require('mongoose');

const temperature_squema = mongoose.Schema({
    max_temp_celsius: {
        type: Number,
        required: true
    },
    min_temp_celsius: {
        type: Number,
        required: true
    },
    location: {
        type: String
    },
    date_register: {
        type: String,
        required: true
    },
    max_temp_celsius_plantation: {
        type: Number,
        required: true
    },
    min_temp_celsius_plantation: {
        type: Number,
        required: true
    },
    max_humidity_rate_plantation:{
        type: Number,
        required: true
    },
    min_humidity_rate_plantation:{
        type: Number,
        required: true
    },
    plantation_id:{
        type: String,
        required: true
    },
    instance_id: {
        type: Number,
        required: true
    }
});

const Temperature = module.exports = mongoose.model('temperature', temperature_squema);

module.exports.get = (callback, limit) => {
    Temperature.find(callback).limit(limit);
}