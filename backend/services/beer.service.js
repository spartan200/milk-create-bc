var Member = require('../models/member');
var Meetup = require('../models/meetup');
var MemberMeetupBeer = require('../models/memberMeetupBeer');

module.exports = function BeerService() {

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