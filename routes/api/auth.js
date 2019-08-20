const router = require('express').Router();
const authController = require('../../controllers/authController');
const auth = require('../../middleware/auth');

router.route('/')
    .post(authController.findUser);

router.route('/user')
    .get(auth, authController.findById);

module.exports = router;