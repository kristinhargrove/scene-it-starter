document.addEventListener('DOMContentLoaded', function() {
	let renderMovies = (movieArray) => {

		let finalHTMLArray = movieArray.map(function(currentMovie) {
			return `
				<div class="movie card">
					<img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}" /></img>
					<div class="card-img-bottom">
						<h5 class="card-title movie-title">${currentMovie.Title}</h5>
						<span class="year">${currentMovie.Year}</span>
						<div><button type="button" class="btn btn-primary render-button mt-1">Add</button></div>
					</div>
					
				</div>	
            `
		})

		return finalHTMLArray.join('');
	} 

	document.getElementById('search-form').addEventListener('submit', function(e){
		e.preventDefault();
		document.getElementById('movie-cards').innerHTML = renderMovies(movieData);
	})
});