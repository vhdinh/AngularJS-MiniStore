var express = require("express");

var app = express()

app.use(express.static(__dirname + "/node_modules"));

app.use(express.static(__dirname + "/static"));


port = 5000
app.listen(port, function(){
	console.log("LISTEN TO PORT: ",port,"FOR MINI STORE")
})