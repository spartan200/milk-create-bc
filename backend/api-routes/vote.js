var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

var VoteService = require('../services/vote.service');

/**
 * Handles the Post for voting.
 */
router.post('/Vote', async (req, res) => {
    console.log('Voting...');

    // Get the parameters from the request body
    const email = req.body.email;
    const votes = req.body.votes;
    
    // Call the service to vote
    const result = await new VoteService().vote(email, votes);

    // Return the results
    res.send(result);
});

// export this router for the app.js
module.exports = router;