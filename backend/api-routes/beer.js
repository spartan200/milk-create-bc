var express = require('express');
var router = express.Router();

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
router.post('/ClaimBeer', function(req, res) {
    console.log("Claiming beer...");

    // Get the parameters
    const memberId = req.body.memberId;
    const brewery = req.body.brewery;
    const beer = req.body.beer;

    mongoose.connect("mongodb://localhost:27017/Dogs", {
    }).then(() => {
        for (var c in mongoose.Collection)
            console.log(c);
        // Check that the member belongs to a meetup
        // Add a development meetup
        mongoose.member.find({ email: /^memberId$/i }, (err, member) => {
            if (err)
                console.log(err);
            else
                console.log("Member: " + member);
        });
    });
    
    // TODO: Check that the beer doesn't already exist




    //res.send({ success: true});
});

// export this router to use in our app.js
module.exports = router;