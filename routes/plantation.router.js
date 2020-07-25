const router = require('express').Router();
const plantationController = require('../controllers/plantation.controller');

router.route('/plantation')
    .get(plantationController.index)
    .post(plantationController.new);

router.route('/plantation/:instance_id')
    .get(plantationController.view);

module.exports = router;