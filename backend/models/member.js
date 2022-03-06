const mongoose = require('mongoose');

// Contains information for each member in the Beer Club
var memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Member', memberSchema);