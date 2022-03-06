const mongoose = require('mongoose');

// Joiner table for members and meetups
var memberMeetupSchema = new mongoose.Schema({
    member: String, // FK to the member table
    activeDate: Date // FK to the meetup table
});

module.exports = mongoose.model('MemberMeetup', memberMeetupSchema);