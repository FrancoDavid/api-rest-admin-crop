const mongoose = require('mongoose');

const tool_squema = mongoose.Schema({
    name: {
        type: String,
        required:   true
    },
    description: {
        type: String
    },
    watts_comsumption: {
        type: Number
    },
    plantation_id: {
        type: String,
        required: true
    },
    instance_id: {
        type: Number,
        required: true
    }
});

const Tool = module.exports = mongoose.model('tool', tool_squema);

module.exports.get = (callback, limit) => {
    Tool.find(callback).limit(limit);
}