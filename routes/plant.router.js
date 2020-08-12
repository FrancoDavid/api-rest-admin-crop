const router = require('express').Router();
const plantController = require('../controllers/plant.controller');

router.route('/all')
    .get(plantController.index);

router.route('/view-plantation')
    .get(plantController.viewByPlantation);

router.route('/')
    .get(plantController.view)
    .post(plantController.new)
    .put(plantController.update)
    .delete(plantController.delete);
    
module.exports = router;