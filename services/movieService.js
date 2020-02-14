const movies = require("../movies-mock.js");

const movieService = {
    findByActor: (actorName) =>{
        let moviesWithMatchingActor = movies.filter((movie) => {
            return movie.starring.toLowerCase() === actorName;
        })

        return moviesWithMatchingActor;
    }
}

module.exports = movieService;