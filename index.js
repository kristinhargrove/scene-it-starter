function saveToWatchlist(imdbID) { //saves users movies to their watch list

	var movie = movieData.find(function(currentMovie) {
		return currentMovie.imdbID == imdbID;
		})

		var watchlistJSON = localStorage.getItem('watchlist');
		var watchlist = JSON.parse(watchlistJSON);

		if (watchlist == null) {
			watchlist = [];
		}

		watchlist.push(movie);
		watchlistJSON = JSON.stringify(watchlist);
		localStorage.setItem('watchlist', watchlistJSON);
}

let renderMovies = (movieArray) => {

	let finalHTMLArray = movieArray.map(function(currentMovie) {
		return `
			<div class="movie card" style="width: 18rem; height: 35rem;">
				<img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}"/></img>
				<div class="card-img-bottom">
					<h5 class="card-title movie-title">${currentMovie.Title}</h5>
					<span class="year">${currentMovie.Year}</span>
					<div><button onclick="saveToWatchlist('${currentMovie.imdbID}')" type="button" class="btn btn-primary render-button mt-1">Add</button></div>
				</div>
				
			</div>	
		`
	})

	return finalHTMLArray.join('');
} 

document.getElementById('search-form').addEventListener('submit', function(e){
	e.preventDefault();
	var searchString = document.getElementById('search-bar').value;
	var urlEncodedSearchString = encodeURIComponent(searchString);
	axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=b2969013&s=' + urlEncodedSearchString)
		.then(function (response) {
			console.log(response.data);
			var movieHTML = renderMovies(response.data.Search);
			document.getElementById('movie-cards').innerHTML = movieHTML;
		})
})