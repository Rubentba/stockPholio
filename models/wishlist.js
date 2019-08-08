const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Symbol: {
        type: String,
        required: true
    },
    open: {
        type: Number,
        required: true

    },
    high: {
        type: Number,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    close: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    }
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;