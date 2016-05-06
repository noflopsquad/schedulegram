var express  = require('express');
var bodyParser = require('body-parser');
var Actions = require('./src/Actions');


var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended: false});

app.post('/call',urlEncodedParser,function(request,response){
	var body = request.body;
	var result = Actions.call({
		reason: body.reason,
		caller: body.caller
	});
	response.send(result);
});

var port = process.env.PORT || 3000;
app.listen(port);
