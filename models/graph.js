const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const graphSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    stocks: {
        type: Array,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }

});

const Graph = mongoose.model("Graph", graphSchema);

module.exports = Graph;