var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//array is added here so the scope of the array is not a issue
var friends = ["Tony", "Miranda", "Justin", "Pierre"];

app.get("/", function(req, res){
	res.render("home");
})

app.post("/addfriend", function(req, res){
	var newFriend = req.body.newfriend;
	//push to add new friend extracted from the req.body to array
	friends.push(newFriend);
	res.redirect("/friends");
	console.log(newFriend);
	console.log(friends);
})

app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
})

app.listen(3000, function(){
	console.log("SERVER STARTED");
});