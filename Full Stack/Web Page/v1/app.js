var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

	var campgrounds = [
		{name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-3893587?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d277cdc954ec65d_1280.jpg&user=FabricioMacedoPhotos"},
		{name: "Granite Hill", image: "https://www.photosforclass.com/download/pixabay-3893587?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d277cdc954ec65d_1280.jpg&user=FabricioMacedoPhotos"},
		{name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-3893587?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d277cdc954ec65d_1280.jpg&user=FabricioMacedoPhotos"},
		{name: "Blue Hill", image:"https://www.photosforclass.com/download/pixabay-3893587?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d277cdc954ec65d_1280.jpg&user=FabricioMacedoPhotos"},
		{name: "Trout River", image: "https://www.photosforclass.com/download/pixabay-3893587?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d277cdc954ec65d_1280.jpg&user=FabricioMacedoPhotos"}
	]

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	//redirect to campgrounds page
	res.redirect("/campgrounds");
});

app.listen(3000, function(){
	console.log("------SERVER CONNECTED------");
});