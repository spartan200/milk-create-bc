var express = require('express');
var router = express.Router();

var BeerService = require('../services/beer.service');

// Mongoose is for the database
const mongoose = require("mongoose");

router.get('/', function(req, res) {
    res.send('GET beer route on things');
});

// Checks to see if the given beer has already been claimed
router.get('/BeerClaimed', function(req, res) {
    res.send('GET BeerClaimed route on things');
});

// Claims the beer.  Function will check to see if the beer
// has already been claimed for the current/previous meetup.
router.post('/ClaimBeer', async (req, res) => {
    console.log("Claiming beer...");

    // Get the parameters
    const memberId = req.body.memberId;
    const brewery = req.body.brewery;
    const beer = req.body.beer;

    var result = await new BeerService().claimBeer(memberId, brewery, beer);
    res.send(result);
});

// export this router to use in our app.js
module.exports = router;