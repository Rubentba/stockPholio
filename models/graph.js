const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const graphSchema = new Schema({
});

const Graph = mongoose.model("Graph", graphSchema);

module.exports = Graph;