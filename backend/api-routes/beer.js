var express = require('express');
var router = express.Router();

var Member = require('../models/member');
var Meetup = require('../models/meetup');
var MemberMeetupBeer = require('../models/memberMeetupBeer');
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
    /*// Make sure the member exists
    var member = await Member.getMember(memberId);
    if (member == null) {
        // Member doesn't actually exist
        res.send({ success: false, errorMessage: `No member with the email (${memberId}) was found`});
        return;
    }

    // Get the active meetup
    var meetup = await Meetup.getActiveMeetup(); 
    if (meetup == null) {
        // There isn't an active meetup
        res.send({ success: false, errorMessage: 'There are currently not any active Meetups'});
        return;
    }


    // Check that the beer doesn't already exist
    var claimedBeer = await MemberMeetupBeer.getByBeer(brewery, beer);

    if (claimedBeer != null && claimedBeer.activeDate.getTime() !== meetup.activeDate.getTime()) {
        // Beer was claimed at a prior meeting
        res.send({ success: false, errorMessage: 'The beer was claimed for a prior Meetup'});
        return;
    } else if (claimedBeer != null && claimedBeer.member != member.email) {
        // Beer was claimed by someone else
        res.send({ success: false, errorMessage: 'The beer has been claimed by another member'});
        return;
    } else if (claimedBeer != null) {
        // Beer was already claimed by this member
        res.send({ success: true });
        return;
    }

    // Everything is correct to be inserted into the database
    var result = await MemberMeetupBeer.insertRecord(member.email, meetup.activeDate, brewery, beer);

    if (err) {
        // There was an error inserting
        res.send({ success: false, errorMessage: result.err });
    } else
        res.send({ success: true });*/
});

// export this router to use in our app.js
module.exports = router;