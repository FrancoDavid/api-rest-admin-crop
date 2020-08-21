const router = require('express').Router();
const energyExpenseController = require('../controllers/energy_expense.controller');

router.route('/all')
    .get(energyExpenseController.index);

router.route('/view-plantation')
    .get(energyExpenseController.viewByPlantation);

router.route('/')
    .get(energyExpenseController.view)
    .post(energyExpenseController.new)
    .put(energyExpenseController.update)
    .delete(energyExpenseController.delete);
    
module.exports = router;