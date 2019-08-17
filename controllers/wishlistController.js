const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Wishlist.findById(req.query)
            .then(dbModelWishlist => res.json(dbModelWishlist))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    findById: function (req, res) {
        db.Wishlist.findById(req.params.id)
            .then(dbModelWishlist => res.json(dbModelWishlist))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    create: function (req, res) {
        db.Wishlist.create(req.body)
            .then(dbModelWishlist => res.json(dbModelWishlist))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    update: function (req, res) {
        db.Wishlist.findOneAndUpdate(req.params.id, req.body)
            .then(dbModelWishlist => res.json(dbModelWishlist))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};