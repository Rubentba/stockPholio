const db = require('../models');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = {
    findUser: function (req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' })
        };

        //Find user
        db.User.findOne({ email })
            .then(user => {
                if (!user) {
                    return res.status(400).json({ msg: 'User does not exists' })
                };

                // Validate password
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                        jwt.sign(
                            { id: user.id },
                            config.get('jwtSecret'),
                            { expiresIn: 36000000000 },
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
                    })
            });
    },
    findById: function (req, res) {
        db.User.findById(req.user.id)
            .select('-password')
            .then(user => res.json(user));
    }
};