var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET beer route on things');
});

// Checks to see if the given beer has already been claimed
router.get('/BeerClaimed', function(req, res) {
    res.send('GET BeerClaimed route on things');
});

// Claims the beer.  Function will check to see if the beer
// has already been claimed for the current/previous meetup.
router.post('/ClaimBeer', function(req, res) {
    // Get the parameters
    const memberId = req.body.memberId;
    const beer = req.body.beer;

    // TODO: Check that the member belongs to a meetup
    
    // TODO: Check that the beer doesn't already exist




    res.send({ success: true});
});

// export this router to use in our app.js
module.exports = router;