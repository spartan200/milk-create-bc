const mongoose = require('mongoose');

// Joiner table for member, beers, and meetups
var memberMeetupBeerSchema = new mongoose.Schema({
    member: String, // FK to member_meetup table
    activeDate: Date, // FK to the member_meetup table
    brewery: String, // FK to the beer table
    beer: String // FK to the beer table
});

/**
 * Get when the given beer was claimed for a meetup.
 * @param {String} brewery 
 * @param {String} beer 
 * @returns - MemberMeetupBeer object for the given brewery and beer. Null if the record doesn't exist.
 */
memberMeetupBeerSchema.statics.getByBeer = async function(brewery, beer) {
    return await this.findOne({ brewery: brewery, beer: beer});
}

memberMeetupBeerSchema.statics.insertRecord = async function(email, meetupDate, brewery, beer) {
    return await this.create({ member: member.email, activeDate: meetupDate, brewery: brewery, beer: beer });
}

module.exports = mongoose.model("MemberMeetupBeer", memberMeetupBeerSchema);