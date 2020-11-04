// create secretNumber
var secretNumber = 7;

// ask user for guess
var guess = prompt("Guess a number");
guess2 = Number(guess);

// check guess
if(guess2 === secretNumber){
	alert("You got it right");
}
else if(guess2 < secretNumber){
	alert("TOO LOW");
}
else{
	alert("TOO HIGH");
}