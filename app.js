const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/webhook');
const PORT = process.env.PORT || 4000;

const app = express();

app.use('/', router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(PORT, function(){
	console.log('App server Listening on ', PORT);
});