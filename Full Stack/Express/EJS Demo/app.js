var express = require("express");
var app = express();

app.use(express.static("public"));	
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/mimas/:mima", function(req, res){
	var gatubela = req.params.mima;
	res.render("dyna", {gatubela: gatubela});
});

app.get("/posts", function(req, res){
	var post = [
		{title: "Topic 1", author: "Person 1"},
		{title: "Topic 2", author: "Person 2"},
		{title: "Topic 3", author: "Person 3"},
		{title: "Topic 4", author: "Person 4"},
		{title: "Topic 5", author: "Person 5"}
		];
	res.render("posts", {post: post});
});

app.listen(3000, function(){
	console.log("-------CONNECTED TO SERVER-------");
});