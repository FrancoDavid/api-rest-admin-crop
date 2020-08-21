const router = require('express').Router();
const notificationController = require('../controllers/notification.controller');

router.route('/all')
    .get(notificationController.index);

router.route('/view-plantation')
    .get(notificationController.viewByPlantation);

router.route('/')
    .get(notificationController.view)
    .post(notificationController.new)
    .put(notificationController.update)
    .delete(notificationController.delete);
    
module.exports = router;