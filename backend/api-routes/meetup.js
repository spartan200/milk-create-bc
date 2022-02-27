var express = require('express');
var router = express.Router();

// Returns true/false depending on if we
// have a current meetup available and beers
// can be claimed.
router.get('/CanClaim', function(req, res) {
    res.send(true);
});

// Returns true/false depending on if we are able to start voting
// on beers.
router.get('/CanVote', function(req, res) {
    res.send("GET Can Vote on things");
});

// export this router to use in our app.js
module.exports = router;
