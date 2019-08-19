const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    Symbol: {
        type: String,
        required: true
    }
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;