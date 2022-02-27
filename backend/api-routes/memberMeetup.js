var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET member meetup route on things');
});

// export this router to use in our app.js
module.exports = router;