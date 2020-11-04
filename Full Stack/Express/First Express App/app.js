var express = require("express");
var app = express();

// when we go to "/" we get a message "Hi there!"
app.get("/", function(req, res){
	res.send("Hi There!");
});
// when we go to "/bye" we get a message "Goodbye"
app.get("/bye", function(req, res){
	res.send("Goodbye");
});
// when we go to "/dogs" we get a message "MEOW"
app.get("/dog", function(req, res){
	res.send("MEOW");
});
//add this to display something when user tries to go to a nonexsistent url
app.get("*", function(req, res){
	console.log("You are a star");
});

//listen
app.listen(3000, function(){
	console.log("-------server has started--------");
});