var express = require('express');
var router = express.Router();

var BeerService = require('../services/beer.service');
var MeetupService = require('../services/meetup.service');

router.get('/', function(req, res) {
    res.send('GET beer route on things');
});

// Checks to see if the given beer has already been claimed
router.get('/BeerClaimed', function(req, res) {
    res.send('GET BeerClaimed route on things');
});

// Returns all the beers that can be currently voted on.
router.get('/VotableBeers', async (req, res) => {
    console.log('Getting Votable Beers');

    const result = await new BeerService().votableBeers();
    res.send(result);
});

/**
 * Returns all the past beers
 */
router.get('/PastBeers', async (req, res) => {
    console.log('Getting the past beers');
    const result = await new MeetupService().meetupsWithBeers();

    res.send(result);
});

/**
 * Checks to see if the beer is available for claiming
 */
router.get('/CheckIsAvailable', async (req, res) => {
    console.log('Checking is available');

    const brewery = req.query.brewery;
    const beer = req.query.beer;

    const result = await new BeerService().checkIsAvailable(brewery, beer);

    res.send(result);
});

// Claims the beer.  Function will check to see if the beer
// has already been claimed for the current/previous meetup.
router.post('/ClaimBeer', async (req, res) => {
    console.log("Claiming beer...");

    // Get the parameters
    const email = req.body.email;
    const brewery = req.body.brewery;
    const beer = req.body.beer;

    var result = await new BeerService().claimBeer(email, brewery, beer);
    res.send(result);
});

// export this router to use in our app.js
module.exports = router;