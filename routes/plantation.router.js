const router = require('express').Router();
const plantationController = require('../controllers/plantation.controller');

router.route('/')
    .get(plantationController.view)
    .post(plantationController.new)
    .put(plantationController.update)
    .delete(plantationController.delete);

router.route('/all')
     .get(plantationController.index);

router.route('/index')
     .get(plantationController.viewByInstance);

module.exports = router;