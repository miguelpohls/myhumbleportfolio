var express = require("express"),
    mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	User = require("./models/user");
	
mongoose.connect("mongodb://localhost/auth_demo-app");
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(require("express-session")({
	secret: "La Chanty",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes


app.get("/", function(req, res){
	res.render("home");
});

app.get("/secret", isLoggedIn,function(req, res){
	res.render("secret");
});


//auth routes

//show sign in form
app.get("/register", function(req, res){
	res.render("register");
});

app.post("/register", function(req, res){
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/secret");		
		});
	});
});

//login routes
//render login form
app.get("/login", function(req, res){
	res.render("login");
});

//login logic
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}),function(req, res){
});

app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/")
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
};

app.listen(3000, function(){
	console.log("=======SERVER STARTED=======");
});