const mongoose = require('mongoose');

// Contains information related to the meetups and beer exchanges
var meetupSchema = new mongoose.Schema({
    activeDate: Date,
    meetingDate: Date,
    status: String // Should be 'Archived', 'CanVote', 'CanClaim'
});

/**
 * Get the active meetup
 * @returns - Active meetup, Null if there is not active meetup.
 */
meetupSchema.statics.getActiveMeetup = async function() {
    return await this.findOne({ status: 'CanClaim' });
}

/**
 * Returns the meetups
 * @returns - All the meetups
 */
meetupSchema.statics.getMeetups = async function() {
    return await this.find();
}

/**
 * Initializes the table with some data
 */
meetupSchema.statics.init = async function() {

    return await this.insertMany([
        { activeDate: new Date(), meetingDate: new Date(), status: 'CanVote' },
        { activeDate: new Date(), meetingDate: new Date(), status: 'CanClaim' }
    ], {});
}

module.exports = mongoose.model('Meetup', meetupSchema);