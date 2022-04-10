const axios = require('axios').default;

module.exports = function BeerService() {
    /**
     * Gets all the past meetup beers
     * @returns 
     */
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


    this.checkIsAvailable = async function(brewery, beer) {
        try {
            const response = await axios.get('http://localhost:2000/beers/CheckIsAvailable', { params: { brewery: brewery, beer: beer } } );
            if (response.status != 200)
                return { success: false, errorMessage: 'There was an error checking if the beer is available.' };
            else
                return { success: true, duplicates: response.data };
        } catch (error) {
            console.error(error);
            return { success: false, errorMessage: 'There was an error check if the beer is available.' };
        }
    }
}