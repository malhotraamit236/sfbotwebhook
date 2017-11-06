const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router.post('/webhook', function(req, res){
	/*console.log('hi');
	console.log(req.body);
	var sampleResponse = {
        "speech": "Hi Test",
        "displayText": "Hi Test",
        "source": "apiai-sfbot"
    };
	res.send(JSON.stringify(sampleResponse));*/

	var myInit = { method: 'GET',
	               mode: 'cors',
	               cache: 'default' };

	fetch('https://staypositivebot.herokuapp.com/api', myInit).then(function(response) {
	  return response.json();
	}).then(function(myJson) {
	  console.log("Hi inside webhook");
	  res.send(myJson);
	});


});

module.exports = router;
