var express = require('express');
var router = express.Router();

// require API_helper.js
const api_helper = require('./API_helper')

router.get('/Search/:searchTerm', function(req, res) {
    //res.send('GET untappd route on things: ' + req.params.searchTerm);
    //res.send('Getting');
    api_helper.make_API_call('https://api.openbrewerydb.org/breweries?by_name=white%20sails')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send('Error: ' + error)
    })
});

// export this router to use in our app.js
module.exports = router;
