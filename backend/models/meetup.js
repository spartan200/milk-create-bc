const mongoose = require('mongoose');

// Contains information related to the meetups and beer exchanges
var meetupSchema = new mongoose.Schema({
    activeDate: Date,
    meetingDate: Date
});

module.exports = mongoose.model('Meetup', meetupSchema);