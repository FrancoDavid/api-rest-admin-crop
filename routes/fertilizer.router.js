const router = require('express').Router();
const fertilizerController = require('../controllers/fertilizer.controller');

router.route('/all')
    .get(fertilizerController.index);

router.route('/')
    .get(fertilizerController.view)
    .post(fertilizerController.new)
    .put(fertilizerController.update)
    .delete(fertilizerController.delete);
    
module.exports = router;