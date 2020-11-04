//https://jsonplaceholder.typicode.com/todos/1

var request = require('request');

request('https://jsonplaceholder.typicode.com/todos/2', function (error, response, body) {
	//eval(require("locus"))
  if (!error && response.statusCode == 200) {
	  var parsedData = JSON.parse(body);
	  console.log(parsedData.userId);
  }
});