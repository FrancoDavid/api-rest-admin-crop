const mongoose = require('mongoose');
const LOG = require('debug')('app');

const expense_energy_schema = mongoose.Schema({
    date_register:   {
        type: String,
        required: true
    },
    expense_total_watts:    {
        type:   Number,
        required: true
    },
    expense_total_clp:  {
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

const EnergyExpense = module.exports =  mongoose.model('expense_energy', expense_energy_schema);

module.exports.get = (callback, limit) => {
    EnergyExpense.find(callback).limit(limit);
}