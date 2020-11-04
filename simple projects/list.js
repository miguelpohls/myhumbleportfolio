var todos = []

window.setTimeout(function() {
	var input = prompt("What do you want to do?");

	while(input !== "quit"){
		if(input === "list"){
			listTodo();
		} else if(input === "new"){
			newTodo();
		} else if(input === "delete"){
			deleteTodo();
		}

		input = prompt("What do you want to do?");
	}

	console.log("OKAY, YOU QUIT THE APP");
}, 500)

function listTodo(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function newTodo(){
	var newTodo = prompt("Enter new Todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete that todo
	//splice
	todos.splice(index, 1);
	console.log("Deleted Todo");
}