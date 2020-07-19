const router = require('express').Router();
const plantationController = require('../controllers/plantation.controller');

// router.get('/plantation', (request, response) => {
//     response.json({
//         status: 'running get'
//     });
// });

router.route('/plantation')
    .get(plantationController.index);

router.route('/plantation/:instance_id')
    .get(plantationController.view);

module.exports = router;