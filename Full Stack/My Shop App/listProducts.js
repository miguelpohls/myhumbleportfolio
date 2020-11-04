var fakerData = require("faker");

console.log("====================");
console.log("MY FAKER SHOPPING LIST");
console.log("====================");

for(var i = 0; i < 10; i++){
	console.log(fakerData.fake("{{commerce.productName}} - ${{commerce.price}}"));
}