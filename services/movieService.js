const movies = require("../movies-mock.js");
const moviesDAO = require("../DAO/moviesDAO");

//Query Database to find the matching movie
const findMovie = (searchParam, searchType, callback) => {
    
    if(searchType === "director"){
        moviesDAO.findRandomMovie({director: searchParam}, (items) => {
            callback(items);
        })
    } else if(searchType === "actor"){
        moviesDAO.findRandomMovie({starring: searchParam}, (items) => {
            callback(items);
        })
    } else if(searchType === "genre"){
        moviesDAO.findRandomMovie({genre: searchParam}, (items) => {
            callback(items);
        })
    } else {
        moviesDAO.findRandomMovie("", (items) => {
            callback(items);
        })
    }
}

const movieService = {
    //Find any random movie
    findAll : (callback) => {
        findMovie("", "",(items) => {
            callback(items)
        });
    },
    //Find a random movie with matching actor
    findByActor: (actorName, callback) => {
        findMovie(actorName, "actor",(items) => {
            callback(items)
        });
    },
    //Find a random movie with matching director
    findByDirector: (directorName, callback) => {
        findMovie(directorName, "director",(items) => {
            callback(items)
        });
    },
    //Find a random movie with matching genre
    findByGenre: (genreLabel, callback) => {
        findMovie(genreLabel, "genre",(items) => {
            callback(items)
        });
    }
    
}

module.exports = movieService;