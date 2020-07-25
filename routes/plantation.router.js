const router = require('express').Router();
const plantationController = require('../controllers/plantation.controller');

router.route('/plantations')
    .get(plantationController.index);

router.route('/plantationsinstance')
    .get(plantationController.viewByInstance)

router.route('/plantation')
    .get(plantationController.view)
    .post(plantationController.new);

module.exports = router;