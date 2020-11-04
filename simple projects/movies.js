var movies = [
    {
        title: "'Interstellar'",
        rating: 4.7,
        hasWatched: true
    },
    {
        title: "'Social Network'",
        rating: 4.9,
        hasWatched: true
    },
    {
    	title: "'Frozen 2'",
        rating: 4,
        hasWatched: false
    },
    {
    	title: "'Les Miserables'",
        rating: 3.9,
        hasWatched: false
    }
]


function movieData(){
	movies.forEach(function(movie){
		var result = "You have "
		if(movie.hasWatched === true){
			result += "watched";
			result += " \"" + movie.title + "\" - ";
			result += movie.rating + " stars";
			console.log(result)
		}else{
			result += "not seen";
			result += " \"" + movie.title + "\" - ";
			result += movie.rating + " stars";
			console.log(result)
		}	
	})
}
