const mongoose = require('mongoose');

// Contains information for each member in the Beer Club
var memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

/**
 * Gets the member with the given email address.
 * @param {String} email 
 * @returns - The member with the given email address.  Null if no member exists.
 */
memberSchema.statics.getMember = async function(email) {
    return await this.findOne({ email: new RegExp('^' + email + '$', 'i')});
}

/**
 * Adds a bunch of members to the database.
 * TODO: Probably shouldn't beer here
 */
memberSchema.statics.init = async function() {
    return await this.insertMany([
        { name: 'Collin Thommasen', email: 'collin.thommasen@hotmail.com', password: '12345' },
        { name: 'Daniel Sedin', email: 'daniel.sedin@cauncks.com', password: '222222'},
        { name: 'Henrik Sedin', email: 'henrik.sedin@canucks.com', password: '333333'}

    ], { });
}

module.exports = mongoose.model('Member', memberSchema);