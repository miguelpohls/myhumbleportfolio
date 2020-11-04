//var num = prompt("Give a Number");

//function isEven(){
//		return true;
//	}
//	else{
//		return false
//	}
//}

function isEven(){
	return num % 2 === 0
}

function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store de value in a result
	for(var i = 2; i<=num; i++){
		result *= i;
	}
	return result;
}

function strReplace(hola){ 
	var newStr = hola.replace(/-/g, "_");

	return newStr;
}
