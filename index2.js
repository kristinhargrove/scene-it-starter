document.addEventListener('DOMContentLoaded', function() {
    let renderMovies = (movieArray) => {
        let movieHTML = movieArray.map(function(currentMovie) {
            `
            <div class="col-4 results">
                <div class="movies-container card" style="width: 18rem;">
                    <div class="movie card-body">
                        <img class="card-img-top " src="${currentMovie.Poster}" alt="movie title" />$</img>
                        <div class="card-body">
                            <h5 class="card-title movie-title">${currentMovie.Title}</h5>
                            <span class="year">${currentMovie.Year}</span>
                            <div><button type="button" class="btn btn-primary render-button mt-1">Add</button></div>
                        </div>
                    </div>  
            </div>
        </div>
            `
        })
        return movieHTML.join('');
    }
    renderMovies(movieData);
});