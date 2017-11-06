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

	console.log("REQUEST ",req);
	var speech = '';
	var myInit = { method: 'GET',
	               mode: 'cors',
	               cache: 'default' };
	var parameters = req.body.json().result.parameters;
	var status = parameters.Status;
	fetch('https://staypositivebot.herokuapp.com/api?status=' + status, myInit).then(function(response) {
	  return response.json();
	}).then(function(myJson) {
	  console.log("Hi inside webhook");
	  speech = myJson.map(function(elem){
		    return elem.Name;
		}).join(", ");
	  var sampleResponse = {
        "speech": speech,
        "displayText": speech,
        "source": "apiai-sfbot"
    	};
	  res.send(sampleResponse);
	});


});

module.exports = router;
