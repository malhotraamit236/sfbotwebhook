const express = require('express');
const router = express.Router();



router.post('/webhook', function(req, res){
	console.log('hi');
	console.log(req.body);
	res.send("hi");
});

module.exports = router;