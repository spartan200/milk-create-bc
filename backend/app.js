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
const MemberMeetupBeer = require('./models/memberMeetupBeer');
const Category = require('./models/category');
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

// Function that will create the database
// TODO: This should be in a separate file
var db = async function() {
    console.log('Creating the database');

    var conn = await mongoose.connect("mongodb://localhost:27017/MCBC", {
    });

    console.log(conn.Meetup);
    console.log('Created database');
    //.then(async () => {
    //    console.log("DB CONNECTED ");
        
        //await Meetup.init();
        //console.log("Meetup initialized");
        //console.log(db);
        //this.Meetup.createIndex({"name":1}, {unique: true});

        // Add a development member
        //var Member = mongoose.model("member", memberSchema);

        // Add a development meetup
        //var Meetup = mongoose.model("meetup", meetupSchema);

        /*for (var c in  mongoose.Collection)
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

    //});

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
var votes = require('./api-routes/vote.js');
var untappd = require('./api-routes/untappd.js');
const { stringify } = require('nodemon/lib/utils');
//const { default: mongoose } = require('mongoose');

app.use('/members', members);
app.use('/meetups', meetups);
app.use('/memberMeetups', memberMeetups);
app.use('/beers', beers);
app.use('/votes', votes);
app.use('/untappd', untappd);

const PORT = 2000;

app.listen(PORT, async () => {
    console.log('app.listen');
    // Create the database
    await db();

    // Initialize the database
    const summer2021 = 'Summer 2021';
    await Meetup.insertMany([{ name: 'Spring 2022', activeDate: new Date(), meetingDate: new Date(), status: 'CanClaim' },
                             { name: 'Winter 2021', activeDate: new Date(), meetingDate: new Date(), status: 'CanVote' },
                             { name: summer2021, activeDate: new Date(), meetingDate: new Date(), status: 'Done' }]);

    await MemberMeetupBeer.insertMany([{ meetup: 'Winter 2021', brewery:'Foamers\' Folly Brewing Co.', beer: 'Beetlejuice Sour' },
                                       { meetup: 'Winter 2021', brewery: 'Whistler Brewing Company', beer: 'Winter Dunkel' },
                                       { meetup: 'Winter 2021', brewery: 'Hoyne Brewing', beer: 'Young Lions Hazy IPA Vol.2' }]);
    // Summer 2021
    await MemberMeetupBeer.insertMany([{ meetup: summer2021, brewery: 'Mount Arrowsmith Brewing Co.', beer: 'Salish Sea Pale Ale'},
                                       { meetup: summer2021, brewery: 'LoveShack Libations', beer: 'Whatever Wheat' },
                                       { meetup: summer2021, brewery: 'Brassneck Brewery', beer: 'Passive Aggresive' },
                                       { meetup: summer2021, brewery: 'Riot Brewing Co.', beer: 'Jimbo Boysenberry Blackberry Sour'},
                                       { meetup: summer2021, brewery: 'Dageraad Brewing', beer: 'White' },
                                       { meetup: summer2021, brewery: 'Tofino Brewing Company', beer: 'Tuff Session Ale' },
                                       { meetup: summer2021, brewery: 'White Sails Brewing', beer: 'White Sails Brewing' },
                                       { meetup: summer2021, brewery: 'Bridge Brewing Company', beer: 'Bourbon Blood Orange' },
                                       { meetup: summer2021, brewery: 'Red Arrow Brewing Company', beer: 'Camping Saison' },
                                       { meetup: summer2021, brewery: 'Moody Ales', beer: 'Flamingose' },
                                       { meetup: summer2021, brewery: 'Superflux Beer Company', beer: 'Coconuts' },
                                       { meetup: summer2021, brewery: 'Sooke Oceanside Brewery', beer: 'Patio Lanterns' },
                                       { meetup: summer2021, brewery: 'Moon Under Water', beer: 'Seaberry Haze' }
                                    ]);

    const feb22 = 'Pre Covid (Feb 20202)';
    await MemberMeetupBeer.insertMany([{ meetup: feb22, brewery: 'Sooke Oceanside Brewery', beer: 'Renfrew Red' },
                                       { meetup: feb22, brewery: 'Salt Spring Brewing', beer: 'Warbler Wheat Ale' },
                                       { meetup: feb22, brewery: 'Lighthouse Brewing Company', beer: 'Numbskull' },
                                       { meetup: feb22, brewery: 'Wolf Brewing Company', beer: 'Black & Tan' },
                                       { meetup: feb22, brewery: 'Red Arrow Brewing Company', beer: 'Midnite Umber Ale' },
                                       { meetup: feb22, brewery: 'Steamworks Brewing Company', beer: 'Salted Chocolate Porter' },
                                       { meetup: feb22, brewery: 'Hoyne Brewing', beer: 'Appleton\'s Finest British Ale' },
                                       { meetup: feb22, brewery: 'Hoyne Brewing', beer: 'Hoyne IPA' },
                                       { meetup: feb22, brewery: 'Fernie Brewing Company', beer: 'Barrel Aged Belgian Stout' },
                                       { meetup: feb22, brewery: 'Axe & Barrel Brewing', beer: 'Langford Lager' },
                                       { meetup: feb22, brewery: 'Red Arrow Brewing Company', beer: 'Threesome' },
                                       { meetup: feb22, brewery: 'Barkerville Brewery', beer: '52 Foot Stout' }]);
                    
    // Voting categories
    await Category.insertMany([{ category: 'Best Beer', active: true, order: 0 },
                               { category: 'Most Interesting', active: true, order: 1 },
                               { category: 'COVID Beer', active: true, order: 2 },
                               { category: 'Best Label', active: false, order: 2 }]);



    console.log(`Listening on port ${PORT}`);
});


