const axios = require('axios').default;

module.exports = function VoteService() {
    /**
     * @returns {{ success: boolean, categories?: String[], errorMessage?: String }}
     */
    this.voteCategories = function() {
        // TODO: Need to make call to web service

        // This is temp
        var categories = ['Best Beer', 'Best Label', 'Most Unique'];

        return { success: true, categories: categories };
    }
}