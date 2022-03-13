const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json({
    type: 'application/json'
}));

// Mongoose is for the database
const mongoose = require("mongoose");
const Meetup = require('./models/meetup');
const Member = require('./models/member');

// Database schema
// Lookup table for breweries
var brewerySchema = new mongoose.Schema({
    brewery: String,
    comment: String
});

// Lookup table for beers
var beerSchema = new mongoose.Schema({
    brewery: String, // FK to the brewery table
    beer: String,
    comment: String
});

// Lookup table for voting category
var voteCategorySchema = new mongoose.Schema({
    category: String,
    active: Boolean
});

// Beer vote
var voteSchema = new mongoose.Schema({
    category: String, // FK to the vote_category table
    member: String, // FK to the member_meetup table
    activeDate: Date, // FK to the member_meetup table
    beerMember: String, // FK to the member_meetup_beer table
    beerActiveDate: String, // FK to the member_meetup_beer table
    beerBrewery: String, // FK to the member_meetup_beer table
    beer: String // FK to the member_meetup_beer table
});

// Function that will create the database
// TODO: This should be in a separate file
var db = function() {
    console.log('Creating the database');

    mongoose.connect("mongodb://localhost:27017/MCBC", {
    })
    .then(async () => {
        console.log("DB CONNECTED ");
        
        /*// Add a development member
        var Member = mongoose.model("member", memberSchema);

        // Add a development meetup
        var Meetup = mongoose.model("meetup", meetupSchema);

        for (var c in  mongoose.Collection)
            console.log(c);

        // Check that things are created
        Member.find({}, (err, member) => {
            if (err) {
                console.log("Member Not Worked");
                console.log(err);
            } else {
                console.log("All members in DB are:  ");
                console.log(member);
            }
        });

        Meetup.find({}, (err, meetup) => {
        if (err) {
            console.log("Meetup Not Worked");
            console.log(err);
        } else {
            console.log("All meetups in DB are: " );
            console.log(meetup);
        }
        });

        console.log(mongoose.Collection);*/

    });

    // Create an array with all the tables for the database
    /*const tables = new[mongoose.model("brewery", brewerySchema),
                       mongoose.model("beer", beerSchema),
                       mongoose.model("member", memberSchema),
                       mongoose.model("meetup", meetupSchema),
                       mongoose.model("member_meetup", memberMeetupSchema),
                       mongoose.model("member_meetup_beer", memberMeetupBeerSchema),
                       mongoose.model("vote_category", voteCategorySchema),
                       mongoose.model("vote", voteSchema)];*/
                      

}

// Add all the routers
var members = require('./api-routes/member.js');
var meetups = require('./api-routes/meetup.js');
var memberMeetups = require('./api-routes/memberMeetup.js');
var beers = require('./api-routes/beer.js');
var untappd = require('./api-routes/untappd.js');
const { stringify } = require('nodemon/lib/utils');
//const { default: mongoose } = require('mongoose');

app.use('/members', members);
app.use('/meetups', meetups);
app.use('/memberMeetups', memberMeetups);
app.use('/beers', beers);
app.use('/untappd', untappd);

const PORT = 2000;

app.listen(PORT, () => {
    // Create the database
    db();

    console.log(`Listening on port ${PORT}`);
});


