//variable to keep track of the number of squares depending on easy or hard
var numSquares = 6;
var colors = [];
//quantity of colors because each square is a color
var squares = document.querySelectorAll(".square");
//the color that has to be guessed
var pickedColor;
//the color that has to be guessed has to be displayed
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of click square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
	}
}

function setupModeButtons(){
	//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		//removing the class from both buttons and then adding it to one (just to be safe)
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		//adds the selected category to the button that was clicked wether it is hard or easy because we are looping through the buttons nodelist
		this.classList.add("selected");

		//if we have a fast two line if statement with two conditions it is a good case for a ternary operator
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		//if(this.textContent === "Easy"){
		//	numSquares = 3;
		//} else{
		//	numSquares = 6; 
		//}
		reset();
		//figure out how many squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes
	})
}

function reset(){
	//generate all new colors(already have it)
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i<squares.length; i++){
		//we are adding the colors depending on numSquares, but if there are only 3 colors colors[i] < 6 it is going to be false so the else executes
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})


//for loop to assign a color to each square
for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of click square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given colors
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 255);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 255);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 255);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}