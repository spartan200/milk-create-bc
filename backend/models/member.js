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

module.exports = mongoose.model('Member', memberSchema);