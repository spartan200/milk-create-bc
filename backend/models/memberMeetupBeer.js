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
 * @returns {{member: String, activeDate: Date, brewery: String, beer: String}} - MemberMeetupBeer object for the given brewery and beer. Null if the record doesn't exist.
 */
memberMeetupBeerSchema.statics.getByBeer = async function(brewery, beer) {
    return await this.findOne({ brewery: brewery, beer: beer});
}

/**
 * Returns all the beers for the given meetup.
 * @param {*} meetupDate 
 * @returns {{member: String, activeDate: Date, brewery: String, beer: String}}
 */
memberMeetupBeerSchema.statics.getByMeetup = async function(meetupDate) {
    return await this.find({ activeDate: meetupDate });
}

memberMeetupBeerSchema.statics.insertRecord = async function(email, meetupDate, brewery, beer) {
    return await this.create({ member: email, activeDate: meetupDate, brewery: brewery, beer: beer });
}

module.exports = mongoose.model("MemberMeetupBeer", memberMeetupBeerSchema);