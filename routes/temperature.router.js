const router = require('express').Router();
const temperatureController = require('../controllers/temperature.controller');

router.route('/all')
    .get(temperatureController.index);
router.route('/list')
    .get(temperatureController.viewByPlantation);
router.route('/')
    .get(temperatureController.view)
    .post(temperatureController.new)
    .put(temperatureController.update)
    .delete(temperatureController.delete);

module.exports = router;