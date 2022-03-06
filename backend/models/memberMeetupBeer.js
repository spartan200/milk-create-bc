const mongoose = require('mongoose');

// Joiner table for member, beers, and meetups
var memberMeetupBeerSchema = new mongoose.Schema({
    member: String, // FK to member_meetup table
    activeDate: Date, // FK to the member_meetup table
    brewery: String, // FK to the beer table
    beer: String // FK to the beer table
});

module.exports = mongoose.model("MemberMeetupBeer", memberMeetupBeerSchema);