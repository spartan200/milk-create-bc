const axios = require('axios').default;

module.exports = function VoteService() {
    /**
     * @returns {{ success: boolean, categories?: String[], errorMessage?: String }}
     */
    this.voteCategories = async function() {
        try {
            const response = await axios.get('http://localhost:2000/votes/VoteCategories');

            if (response.status != 200)
                return { success: false, errorMessage: 'There was an error getting the voting categories.' };
            else
                return { success: true, categories: Array.from(response.data, x => x.category) };
        } catch (error) {
            console.error(error);
            return { success: false, errorMessage: 'There was an error getting the voting categories.' };
        }
    }

    /**
     * Returns all the beers that can be voted on
     * @returns {{ success: boolean, beers?: {brewery: String, beer: String}[], errorMessage?: String}}
     */
    this.beers = async function() {
        try {
            const response = await axios.get('http://localhost:2000/beers/VotableBeers');
            if (response.status != 200)
                return { success: false, errorMessage: 'There was an error getting the beers that can be voted on.' };
            else {
                // Add a blank beer option
                response.data.beers.splice(0, 0, {brewery: '', beer: ''});
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return { success: false, errorMessage: 'There was an error getting the beers that can be voted on.' };
        }
    }

    /**
     * 
     * @param {String} email - Email for voter
     * @param {{ brewery: String, beer: String, category: String}[]} votes - Array containing the beers and the vote category
     * @returns {{ success: boolean, errorMessage?: String}}
     */
    this.vote = async function(email, votes) {
        try {
            const response = await axios.post('http://localhost:2000/votes/Vote', { email: email, votes: votes });
            if (response.status != 200)
                return { success: false, errorMessage: 'There was an error voting for beers.' };
            else {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return { success: false, errorMessage: 'There was an error voting for beers.' };
        }
    }
}