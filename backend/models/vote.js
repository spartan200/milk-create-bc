const mongoose = require('mongoose');

// Beer vote
var voteSchema = new mongoose.Schema({
    category: String, // FK to the vote_category table
    member: String, // FK to the member_meetup table
    activeDate: Date, // FK to the member_meetup table
    beerMember: String, // FK to the member_meetup_beer table
    beerActiveDate: String, // FK to the member_meetup_beer table
    beerBrewery: String, // FK to the member_meetup_beer table
    beer: String // FK to the member_meetup_beer table
});

/**
 *  Add the insert record function
 * @param {String} category 
 * @param {String} member 
 * @param {Date} activeDate 
 * @param {String} beerMember 
 * @param {Date} beerActiveDate 
 * @param {String} beerBrewery 
 * @param {String} beer 
 * @returns {}
 */
voteSchema.statics.insertRecord = async function(category, member, activeDate, 
                                                 beerMember, beerActiveDate, 
                                                 beerBrewery, beer) {
    return await this.create({ category: category, member: member, activeDate: activeDate,
                               beerMember: beerMember, beerActiveDate: beerActiveDate, 
                               beerBrewery: beerBrewery, beer: beer });                                                 
}

module.exports = mongoose.model('Vote', voteSchema);