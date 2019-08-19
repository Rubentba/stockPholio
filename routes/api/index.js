const router = require('express').Router();
const userRoutes = require('./user');
const graphRoutes = require('./graph');
const wishlistRoutes = require('./wishlist');

// routes
router.use('/user', userRoutes);
router.use('/user/graph', graphRoutes);
router.use('/user/wishlist', wishlistRoutes);

module.exports = router;
