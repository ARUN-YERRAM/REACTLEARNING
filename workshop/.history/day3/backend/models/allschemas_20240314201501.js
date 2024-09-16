const mongoose = require('mongoose');

const Schema1 = new mongoose.Schema({
  // Define your schema fields here
});

const Schema2 = new mongoose.Schema({
  // Define your schema fields here
});

module.exports = {
  Model1: mongoose.model('Model1', Schema1),
  Model2: mongoose.model('Model2', Schema2)
};
