const mongoose = require('mongoose');

const plantation_squema = mongoose.Schema({
    name:   {
        type: String,
        required:   true
    },
    date_create:    {
        type:   Date,
        default:    Date.now
    },
    date_init:  {
        type:  Date,
        default:    Date.now,
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


const Plantation = module.exports = mongoose.model('plantation', plantation_squema);

// module.exports.get = (callback, limit) => {
//     Plantation.find(callback).limit(limit);
// }