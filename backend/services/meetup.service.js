var Meetup = require('../models/meetup');
var MemberMeetupBeer = require('../models/memberMeetupBeer');

module.exports = function MeetupService() {
    this.meetupsWithBeers = async function() {
        // Get all the claimed beers for the meetups
        var results = [];
        const mmbs = await MemberMeetupBeer.getAll();
        console.log(JSON.stringify(mmbs));
        var lastMeetup = null;
        for (let i = 0; i < mmbs.length; i++) {
            if (lastMeetup == null || mmbs[i].activeDate != lastMeetup) {
                lastMeetup = {
                    index: results.length,
                    meetup: mmbs[i].activeDate,
                    beers: []
                };

                results.push(lastMeetup);
            }

            lastMeetup.beers.push({ brewery: mmbs[i].brewery, beer: mmbs[i].beer });
        }
        return results;
    }
}