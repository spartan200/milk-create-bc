const mongoose = require('mongoose');
const FuzzyMatching = require('fuzzy-matching');

// Joiner table for member, beers, and meetups
var memberMeetupBeerSchema = new mongoose.Schema({
    member: String, // FK to member_meetup table
    meetup: String, // FK to the member_meetup table
    brewery: String, // FK to the beer table
    beer: String // FK to the beer table
});

// Create an unique index
memberMeetupBeerSchema.index({ member: 1, meetup: 1, brewery: 1, beer: 1}, { unique: true });

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

/**
 * Returns all the meetups, members, and beers
 * @returns {[{member: String, activeDate: Date, brewery: String, beer: String}]}
 */
memberMeetupBeerSchema.statics.getAll = async function() {
    // TODO: Need to order these
    return await this.find();
}

/**
 * 
 * @param {String[]} String[] if a possible match is found.  Null is returned if there isn't a possible match.
 */
memberMeetupBeerSchema.statics.fuzzyMatchBrewery = async function(brewery) {
    // Get all the breweries
    // TODO: only show unique
    var breweries = (await this.find({})).map(x => x.brewery);
    var matches = [];
    var lastMatch = null;

    do {
        var fm = new FuzzyMatching(breweries);
        lastMatch = fm.get(brewery).value;

        if (lastMatch != null) {
            breweries.splice(breweries.indexOf(lastMatch), 1);
            matches.push(lastMatch);
        }
    } while(lastMatch != null);

    return matches;
}

memberMeetupBeerSchema.statics.fuzzyMatchBeer = async function(breweries, beer) {
    var matches = [];

    // For each brewery check if there are any possible matches
    for (const brewery of breweries) {
        const beers = (await this.find({ brewery: brewery })).map(x => x.beer);

        var lastMatch = null;
        do {
            var fm = new FuzzyMatching(beers);
            lastMatch = fm.get(beer).value;

            if (lastMatch != null) {
                beers.splice(beers.indexOf(lastMatch), 1);
                matches.push({ brewery: brewery, beer: lastMatch });
            }
        } while(lastMatch != null);
    }

    return matches;
}

memberMeetupBeerSchema.statics.insertRecord = async function(email, meetupDate, brewery, beer) {
    return await this.create({ member: email, activeDate: meetupDate, brewery: brewery, beer: beer });
}


module.exports = mongoose.model("MemberMeetupBeer", memberMeetupBeerSchema);