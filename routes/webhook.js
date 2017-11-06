const express = require('express');
const router = express.Router();



router.post('/webhook', function(req, res){
	console.log('hi');
	console.log(req.body);
	var sampleResponse = {
        "speech": "Hi Test",
        "displayText": "Hi Test",
        "source": "apiai-sfbot"
    };
	res.send(JSON.stringify(sampleResponse));
});

module.exports = router;