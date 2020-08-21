const router = require('express').Router();
const cycleController = require('../controllers/cycle.controller');

router.route('/all')
    .get(cycleController.index);

router.route('/view-plantation')
    .get(cycleController.viewByPlantation);

router.route('/')
    .get(cycleController.view)
    .post(cycleController.new)
    .put(cycleController.update)
    .delete(cycleController.delete);
    
module.exports = router;