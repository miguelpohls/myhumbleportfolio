//printReverse()


function printReverse(arr){
for(var i = 3; i>=0; i--){
	console.log("*********");
	console.log(arr[i]);
	console.log("*********");
}
}

printReverse([1, 2, 3, 4]);

console.log("****** printReverse2 *******");

var printReverse2 = ["a", "b", "c", "d"];

for(var i = 3; i>=0; i--){
	console.log("*********");
	console.log(printReverse2[i]);
	console.log("*********");
}

//isUniform

//num = [1, 1, 1, 1];
//num2= [1, 1, 1, 2];
//letters = ["a", "a", "a", "a"];
//letters2 = ["a", "a", "b", "a"];

function isUniform(arr){
	var first = arr[0];
	for (var i = 1; i < arr.length; i++){
		if(array[i]!== first){
			return false;
		} 
	}
	return true;
}

//sumArray() *********

function sumArray(arr){
	var total = 0;
	arr.forEach(function(num){
		total += num;
	});
	return total;
}

//max()

function max(arr){
	var max = arr[0];
	arr.forEach(function(element){
		if(arr[element] > max){
			max = arr[element];
		}
	});
	return max;
}
