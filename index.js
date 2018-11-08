var express = require('express'),
	app = express(),
	port = 3000;

app.get('/', function (req, res){
	res.json({"greeting":"Hello world!"})
})

app.listen(port, function(){
	console.log("Express server is running on port " + port)
})

