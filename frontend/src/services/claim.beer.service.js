const axios = require('axios').default;

module.exports = function ClaimBeerService() {
    /**
     * 
     * @param {String} brewery 
     * @param {String} beer 
     * @param {String} email 
     * @returns {{ success: boolean, errorMessage: String}}
     */
    this.claimBeer = async function(brewery, beer, email) {
        try {
            const response = await axios.post('http://localhost:2000/beers/ClaimBeer', {
                brewery: brewery,
                beer: beer,
                email: email
            });
            if (response.status == 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
        }
    }
}