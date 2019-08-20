const router = require('express').Router();
const wishlistController = require('../../controllers/wishlistController');
const auth = require('../../middleware/auth');

router.route('/')
    .get(auth, wishlistController.findAll)
    .post(auth, wishlistController.create);

router.route('/:id')
    .get(auth, wishlistController.findById)
    .put(auth, wishlistController.update);

module.exports = router;