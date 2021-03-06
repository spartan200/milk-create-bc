var Member = require('../models/member');
var Meetup = require('../models/meetup');
var MemberMeetupBeer = require('../models/memberMeetupBeer');

var FuzzyMatching = require('fuzzy-matching');

module.exports = function BeerService() {

    this.votableBeers = async function() {
        // Get the active meetup
        var meetup = await Meetup.getActiveMeetup();
        if (meetup == null)
            // There isn't an active meetup
            return { success: false, errorMessage: 'There are currently not any active Meetups' };

        // Get the beers that were claimed
        var claimedBeers = await MemberMeetupBeer.getByMeetup(meetup.activeDate);
        if (claimedBeers == null)
            // There as an error
            return { success: false, errorMessage: 'There was an error getting the Beers for the Meetup' };
        console.log(Array.from(claimedBeers, x => {return { brewery: x.brewery, beer: x.beer}}));
        return { success: true, beers: Array.from(claimedBeers, x => {return { brewery: x.brewery, beer: x.beer}}) };
    }


    this.checkIsAvailable = async function(brewery, beer) {
        if (brewery == null || beer == null)
            return [];

        // Get potential breweries
        const possibleBreweries = await MemberMeetupBeer.fuzzyMatchBrewery(brewery);
        if (possibleBreweries == null || possibleBreweries.length < 1)
            // Never found a possible match
            return [];

        return await MemberMeetupBeer.fuzzyMatchBeer(possibleBreweries, beer);
    }

    /**
     * Claim a beer for the given member in the active meetup
     * @param {String} email 
     * @param {String} brewery 
     * @param {String} beer 
     * @returns - Object containing the "Success" status and "errorMessage" if it failed.
     */
    this.claimBeer = async function(email, brewery, beer) {
        // Make sure the member exists
        var member = await Member.getMember(email);
        if (member == null)
            // Member doesn't actually exist
            return { success: false, errorMessage: `No member with the email (${email}) was found` };

        // Get the active meetup
        var meetup = await Meetup.getActiveMeetup(); 
        if (meetup == null)
            // There isn't an active meetup
            return { success: false, errorMessage: 'There are currently not any active Meetups'};


        // Check that the beer doesn't already exist
        var claimedBeer = await MemberMeetupBeer.getByBeer(brewery, beer);

        if (claimedBeer != null && claimedBeer.activeDate.getTime() !== meetup.activeDate.getTime()) {
            // Beer was claimed at a prior meeting
            return { success: false, errorMessage: 'The beer was claimed for a prior Meetup'};
        } else if (claimedBeer != null && claimedBeer.member != member.email) {
            // Beer was claimed by someone else
            return { success: false, errorMessage: 'The beer has been claimed by another member'};
        } else if (claimedBeer != null) {
            // Beer was already claimed by this member
            return { success: true };
        }

        // Everything is correct to be inserted into the database
        var result = await MemberMeetupBeer.insertRecord(member.email, meetup.activeDate, brewery, beer);

        if (result.err) {
            // There was an error inserting
            return { success: false, errorMessage: result.err };
        } else
            return { success: true };
        
    }
}