const EnergyExpense = require('../models/energy_expense.model');
const LOG = require('debug')('app');

exports.index = (request, response) => {
    LOG('exe index energyExpense');
    EnergyExpense.get((err, energy_expenses) => {
        if (err)
            response.status(500).json({error:   err,    message: 'error! in query'});

        response.status(200).json({
            message: 'EnergyExpenses loaded',
            data: energy_expenses
        });
    });
}

exports.viewByPlantation = (request, response) => {
    LOG('exe by energyExpenseation');
    EnergyExpense.find(request.query, (err, energyExpense) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'EnergyExpense details loaded',
            data: energyExpense
        });
    })
};

exports.new = (request, response) =>    {
    LOG('exe create EnergyExpense');
    const energyExpense = new EnergyExpense();

    energyExpense.date_register = request.body.date_register;
    energyExpense.expense_total_watts = request.body.expense_total_watts;
    energyExpense.expense_total_clp = request.body.expense_total_clp;
    energyExpense.plantation_id = request.body.plantation_id; 
    energyExpense.instance_id = request.body.instance_id;
        
    energyExpense.save((err) => {
        if (err) {
            response.status(500).json({ error: err, message:'EnergyExpense not create'});
        } else {
            response.status(200).json({
                message: 'New EnergyExpense created!',
                data: energyExpense
            });
        }
            
    });
};

exports.view = (request, response) => {
    LOG('exe by _id');
    EnergyExpense.findById(request.query, (err, energyExpense) => {
        if  (err) {
            response.status(500).json({ error:  err,    message: 'error! in the searching' });
        }
        response.status(200).json({
            message: 'EnergyExpense details loaded',
            data: energyExpense
        });
    })
};

exports.update = (request, response)    =>   {
    LOG('exe update EnergyExpense');
    EnergyExpense.findById(request.body._id, (err, energyExpense) => {
        if (err) {
            response.status(500).json({error:   err,    message:    'EnergyExpense not update'});
        }
        LOG(energyExpense);
        energyExpense.date_register = request.body.date_register;
        energyExpense.expense_total_watts = request.body.expense_total_watts;
        energyExpense.expense_total_clp = request.body.expense_total_clp;
        energyExpense.plantation_id = request.body.plantation_id; 
        energyExpense.instance_id = request.body.instance_id;

        energyExpense.save((err)   => {
            if (err)
                response.status(500).json({error: err, message: 'EnergyExpense not update'});
            
            response.status(200).json({
                message: 'EnergyExpense info updated',
                data: energyExpense
            });
        });
    });
};

exports.delete = (request, response)    =>  {
    LOG('exe remove EnergyExpense');
    EnergyExpense.deleteOne({_id: request.query._id}, (err, energyExpense) =>    {
        if (err)
            response.status(500).send({error: err, message: 'EnergyExpense not remove'});
    
    response.status(200).json({message: 'EnergyExpense deleted', data:  energyExpense})});
};