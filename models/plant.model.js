const mongoose = require('mongoose');
const LOG = require('debug')('app');

const plant_squema = mongoose.Schema({
    nick_name:   {
        type: String
    },
    name_kind:    {
        type:   String
    },
    type_origin:  {
        type:  Number,
        required:   true
    },
    photo:    {
        type:   String
    },
    width:  {
        type:   Number
    },
    heigth: {
        type:   Number
    },
    kind_plant:  {
        type:   Number,
        required:   true
    },
    sex:  {
        type:   Number,
        required:   true
    },
    cyrcle_life:  {
        type:   Number,
        required:   true
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

const Plant = module.exports =  mongoose.model('plant', plant_squema);

module.exports.get = (callback, limit) => {
    Plant.find(callback).limit(limit);
}