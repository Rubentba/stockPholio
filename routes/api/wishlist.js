const router = require('express').Router();
const wishlistController = require('../../controllers/wishlistController');

router.route('/')
    .get(wishlistController.findAll)
    .post(wishlistController.create);

router.route('/:id')
    .get(wishlistController.findById)
    .put(wishlistController.update);

module.exports = router;