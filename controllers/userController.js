const db = require('../models');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = {
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbModelUser => res.json(dbModelUser))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    findUser: function (req, res) {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' })
        };

        //Find user
        db.User.findOne({ email })
            .then(user => {
                if (user) {
                    return res.status(400).json({ msg: 'User already exists' })
                };

                const newUser = new db.User({
                    username,
                    email,
                    password
                });

                // Create salt & hash
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash
                        newUser.save()
                            .then(user => {
                                jwt.sign(
                                    { id: user.id },
                                    config.get('jwtSecret'),
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        if (err) throw err;
                                        res.json({
                                            token,
                                            user: {
                                                id: user.id,
                                                username: user.username,
                                                email: user.email
                                            }
                                        }
                                        )
                                    });
                            });
                    });
                });
            });
    }
};