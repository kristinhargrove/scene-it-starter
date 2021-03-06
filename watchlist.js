document.addEventListener('DOMContentLoaded', function() {
    var watchlistJSON = localStorage.getItem('watchlist');
	var watchlist = JSON.parse(watchlistJSON); //parses JSON into Javascript 

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
    document.getElementById('movie-cards').innerHTML = renderMovies(watchlist);
})
