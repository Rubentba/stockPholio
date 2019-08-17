const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        unique: true,
        required: "Password is Required",
    },
    email: {
        type: String,
        unique: true,
        required: "Email is Required"
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    pie: {
        type: Schema.ObjectId,
        ref: 'Graph'
    },
    wishlist: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
