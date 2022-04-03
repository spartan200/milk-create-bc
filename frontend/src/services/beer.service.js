const axios = require('axios').default;

module.exports = function BeerService() {
    this.meetupBeers = async function() {
        try {
            const response = await axios.get('http://localhost:2000/beers/PastBeers');
            if (response.status != 200)
                return { success: false, errorMessage: 'There was an error getting the past beers.' };
            else {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return { success: false, errorMessage: 'There was an error getting the past beers.' };
        }
    }
}