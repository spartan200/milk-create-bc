const express = require('express');
const app = express();

// Add all the routers
var members = require('./api-routes/member.js');
var meetups = require('./api-routes/meetup.js');
var memberMeetups = require('./api-routes/memberMeetup.js');
var beers = require('./api-routes/beer.js');
var untappd = require('./api-routes/untappd.js');

app.use('/members', members);
app.use('/meetups', meetups);
app.use('/memberMeetups', memberMeetups);
app.use('/beers', beers);
app.use('/untappd', untappd);

const PORT = 2000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


