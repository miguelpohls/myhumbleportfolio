var express = require("express");
var app = express();

// welcome to my assignment
app.get("/", function(req, res){
	res.send("Welcome to my Assignment");
});

//Speak
app.get("/speak/:animal", function(req, res){
	//getting the variable
	var animal = req.params.animal
	//object with mulitple sounds
	var sounds = {
		cat: "meow",
		dog: "woof woof",
		cow: "mooo",
		pig: "oink",
		goldfish: "bloop"} 
	//plugging animal into the object sounds
	var sound = sounds[animal].toLowerCase();
	res.send("The " + animal + " says " + sound);
});

//Repeat
app.get("/repeat/:message/:number", function(req, res){
	var number = req.params.number;
	var message = req.params.message;
	var n = Number(number);
	var result = "";
	for(var i = 0; i < n; i++){
		result += message + " ";
	}
	res.send(result);
});

app.get("*", function(req, res){
	console.log("Sorry, page not found...What are you doing with your life?");
})

//starting server PORT 3000
app.listen(3000, function(){
	console.log("==========server has started===========");
});