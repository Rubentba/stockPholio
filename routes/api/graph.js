const router = require('express').Router();
const graphController = require('../../controllers/graphController');

router.route('/')
    .get(graphController.findAll)
    .post(graphController.create);

router.route('/:id')
    .get(graphController.findById)
    .put(graphController.update);

module.exports = router;