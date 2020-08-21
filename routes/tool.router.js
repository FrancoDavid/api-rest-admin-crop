const router = require('express').Router();
const toolController = require('../controllers/tool.controller');

router.route('/all')
    .get(toolController.index);

router.route('/list')
    .get(toolController.viewByPlantation)

router.route('/')
    .get(toolController.view)
    .post(toolController.new)
    .put(toolController.update)
    .delete(toolController.delete)

module.exports = router;