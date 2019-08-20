const router = require('express').Router();
const graphController = require('../../controllers/graphController');
const auth = require('../../middleware/auth');

router.route('/')
    .get(auth, graphController.findAll)
    .post(auth, graphController.create);

router.route('/:id')
    .get(auth, graphController.findById)
    .put(auth, graphController.update);

module.exports = router;