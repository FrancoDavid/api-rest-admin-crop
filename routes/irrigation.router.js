const router = require('express').Router();
const irrigationController = require('../controllers/plant.controller');

router.route('/all')
    .get(irrigationController.index);

router.route('/view-plantation')
    .get(irrigationController.viewByPlantation);

router.route('/')
    .get(irrigationController.view)
    .post(irrigationController.new)
    .put(irrigationController.update)
    .delete(irrigationController.delete);
    
module.exports = router;