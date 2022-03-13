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

    /**
     * Returns all the beers that can be voted on
     * @returns {{ success: boolean, beers?: String[], errorMessage?: String}}
     */
    this.beers = async function() {
        try {
            const response = await axios.get('http://localhost:2000/beers/VotableBeers');
            if (response.status != 200)
                return { success: false, errorMessage: 'There was an error getting the beers that can be voted on.' };
            else {
                // Add a blank beer option
                response.data.beers.splice(0, 0, '');
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return { success: false, errorMessage: 'There was an error getting the beers that can be voted on.' };
        }
    }
}