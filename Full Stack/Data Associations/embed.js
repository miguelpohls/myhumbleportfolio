var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//post - title, content

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

//user - email, name
var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

var newUser = new User({
	email: "hermione@hogwarts.edu",
	name: "Hermione Granger"
});

// newUser.posts.push({
// 	title: "How to brew polyjuice potion",
// 	content: "Just kidding, go to potions class to learn it."
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: "They are delicious"
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(post)
// 	}
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
	if(err){
		//console.log(err);
	}else{
		user.posts.push({
			title: "3 things I really hate",
			content: "voldemort, voldemort, voldemort"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			}else{
				console.log(user);
			}
		});
	}
});
