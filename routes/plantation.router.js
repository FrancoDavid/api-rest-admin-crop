const router = require('express').Router();
const plantationController = require('../controllers/plantation.controller');


router.route('/plantations')
    .get(plantationController.index);

router.route('/plantationsinstance')
    .get(plantationController.viewByInstance);

router.route('/plantation')
    .get(plantationController.view)
    .post(plantationController.new)
    .put(plantationController.update)
    .delete(plantationController.delete);

module.exports = router;