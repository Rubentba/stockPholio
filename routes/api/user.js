const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
    .post(userController.findUser);

router.route('/:id')
    .get(userController.findById);

module.exports = router;