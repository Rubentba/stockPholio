// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const routes = require('./routes');
const config = require('config');

// For Heroku
const PORT = process.env.PORT || 3001;
const app = express();

// For Morgan
app.use(logger('dev'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here
app.use(routes);

// DB URL
const MONGODB_URI =
  process.env.MONGODB_URI || config.get('mongoURI');

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Making sure the server is live.
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;
