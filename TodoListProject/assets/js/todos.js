//Check off specific todos by clicking
//We add .on to be able to change future lis

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		//This 'this' is the parent element
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
	}
})

$(".fa-pencil-alt").click(function(){
	$("input[type='text']").fadeToggle();
})