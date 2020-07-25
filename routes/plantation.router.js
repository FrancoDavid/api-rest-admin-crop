const router = require('express').Router();
const plantationController = require('../controllers/plantation.controller');

router.route('/getting')
    .get(plantationController.index)
    .post(plantationController.new);

router.route('/setting')
    .get(plantationController.view);

module.exports = router;