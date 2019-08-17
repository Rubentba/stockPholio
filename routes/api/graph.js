const router = require('express').Router();
const graphController = require('../../controllers/graphController');

router.route('/')
    .get(graphController.find)
    .post(graphController.create);

router.route('/:id')
    .get(graphController.findById)
    .update(graphController.update);

module.exports = router;