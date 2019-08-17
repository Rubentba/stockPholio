const db = require('../models');

module.exports = {
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbModelUser => res.json(dbModelUser))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then(dbModelUser => res.json(dbModelUser))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};