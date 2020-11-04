var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding new cat to the DB
//new cat called george
// var george = new Cat({
// 	name: "George",
// 	age: 11,
// 	temperament: "Grouchy"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("something went wrong");
// 	} else{
// 		console.log("saved in the db");
// 		console.log(cat);
// 	}
// });

//this method takes new and save in one
Cat.create({
	name: "Snow White",
	age: 7,
	temperament: "Bland" 
}, function(err, cat){
	if(err){
		console.log(err);
	}else{
		console.log(cat)
	}
});

//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
	if(err){
		console.log("error");
		console.log(err)
	}else{
		console.log("all the cats")
		console.log(cats)
	}
});