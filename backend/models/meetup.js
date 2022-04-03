const mongoose = require('mongoose');

// Contains information related to the meetups and beer exchanges
var meetupSchema = new mongoose.Schema({
    name: { type: String, unique: true },
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
/*meetupSchema.statics.init = async function() {
    console.log('Initializing Meetups...');

    // name shouyld be unique
    //this.unique()
    //this.createIndex({ "name": 1}, { unique: true });

    return await this.insertMany([
        { name: 'Spring 2022', activeDate: new Date(), meetingDate: new Date(), status: 'CanVote' },
        { name: 'Winter 2021', activeDate: new Date(), meetingDate: new Date(), status: 'CanClaim' }
    ], {});
}*/

module.exports = mongoose.model('Meetup', meetupSchema);