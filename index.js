document.addEventListener('DOMContentLoaded', function() {
	let renderMovies = (movieArray) => {

		let finalHTMLArray = movieArray.map(function(currentMovie) {
			return `
				<div class="movie card">
					<img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}" /></img>
					<div class="card-img-bottom">
						<h5 class="card-title movie-title">${currentMovie.Title}</h5>
						<span class="year">${currentMovie.Year}</span>
						<button type="button" class="btn btn-primary render-button mt-1">Add</button>
					</div>
					
				</div>	
            `
		})

		return finalHTMLArray.join('');
	} 

	document.getElementById('movie-cards').innerHTML = renderMovies(movieData);
});