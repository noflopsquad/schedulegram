global.srcRequire = function(name){
	return require( __dirname + '/' + name);
}

var express  = require('express');
var bodyParser = require('body-parser');
var Actions = srcRequire('Actions');


var urlEncodedParser = bodyParser.urlencoded({extended: false});

var app = express();

var port = process.env.PORT || 3000;

app.post('/call',urlEncodedParser,function(request,response){

	var body = request.body;

	var result = Actions.call({
		reason: body.reason,
		caller: body.caller
	});
	response.send(result);
});

app.listen(port);
