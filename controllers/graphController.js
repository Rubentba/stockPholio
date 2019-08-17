const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Graph.findById(req.query)
            .then(dbModelGraph => res.json(dbModelGraph))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    findById: function (req, res) {
        db.Graph.findById(req.params.id)
            .then(dbModelGraph => res.json(dbModelGraph))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    create: function (req, res) {
        db.Graph.create(req.body)
            .then(dbModelGraph => res.json(dbModelGraph))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    update: function (req, res) {
        db.Graph.findOneAndUpdate(req.params.id, req.body)
            .then(dbModelGraph => res.json(dbModelGraph))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};