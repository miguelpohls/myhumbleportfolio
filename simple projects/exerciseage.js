var userAge = prompt("What is your age?");

userAge = Number(userAge);

if(userAge < 0){
	console.log("ERROR");
}

if(userAge === 21){
	console.log("Happy Birthday");
}

if(userAge%2 !== 0){
	console.log("Your age is odd")
}

if(userAge%Math.sqrt(userAge) === 0){
	console.log("Your age is a perfect square");
}