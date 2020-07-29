const router = require('express').Router();
const plantController = require('../controllers/plant.controller');

router.route('/plants')
    .get(plantController.index);

router.route('/plantsplantation')
    .get(plantController.viewByPlantation);

router.route('/plant')
    .get(plantController.view)
    .post(plantController.new)
    .put(plantController.update)
    .delete(plantController.delete);


exports.module = router;