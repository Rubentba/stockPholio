const router = require('express').Router();
const userRoutes = require('./user');
const graphRoutes = require('./graph');
const wishlistRoutes = require('./wishlist');
const authRoutes = require('./auth');

// routes
router.use('/user', userRoutes);
router.use('/graph', graphRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/auth', authRoutes);

module.exports = router;
