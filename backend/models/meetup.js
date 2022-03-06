const mongoose = require('mongoose');

// Contains information related to the meetups and beer exchanges
var meetupSchema = new mongoose.Schema({
    activeDate: Date,
    meetingDate: Date
});

/**
 * Get the active meetup
 * @returns - Active meetup, Null if there is not active meetup.
 */
meetupSchema.statics.getActiveMeetup = async function() {
    return await this.findOne({activeDate: {$exists:true}});
}

module.exports = mongoose.model('Meetup', meetupSchema);