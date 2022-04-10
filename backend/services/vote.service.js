var Member = require('../models/member');
var Meetup = require('../models/meetup');
var Vote = require('../models/vote');
var Category = require('../models/category');

module.exports = function VoteService() {
    /**
     * 
     * @param {String} email 
     * @param {[{brewery: String, beer: String, category: String}]} votes 
     * @returns 
     */
    this.vote = async function(email, votes) {
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
        
        // Need to get the votes
        for (var vote of votes) {
            let voteResult = await Vote.insertRecord(vote.category, member.email, meetup.activeDate,
                                                     member.email, meetup.activeDate,
                                                     vote.brewery, vote.beer);
            console.debug(JSON.stringify(voteResult));
        }
    }

    /**
     * Returns all the active voting categories
     * @returns 
     */
    this.VoteCategories = async function() {
        return await Category.getActive();
    }
}