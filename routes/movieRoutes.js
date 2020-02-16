const express = require("express");
const router = express.Router();
const movies = require("../movies-mock.js");
const movieService = require("../services/movieService");

//@ROUTE /
//@USE find a random movie with no parameter
router.get("/", (req,res) => {
    movieService.findAll((items) => {
        res.json({movies : items})
    });
})

//@ROUTE /actor?actor=<actor_first_name>_<actor_last_name>
//@USE find movie with actor
router.get("/actor", (req, res) => {
    let name, actorProperName;
    if(req.query.actor){
        name = req.query.actor.split("_");
        actorProperName = name[0] + " " + name[1];
        movieService.findByActor(actorProperName.toLowerCase(), (movies) => {
            if(movies.length > 0){
                res.status(200).json({ movies : movies })
            }else{
                res.status(404).json({ actor : "No movies found with matching actor name"})
            }
        })
        
    } else {
        res.status(400).json({ actor : "Invalid request to backend: Malformed URL" })
    }
})

//@ROUTE /director?director=<director_first_name>_<director_last_name>
//@USE find movie with director
router.get("/director", (req, res) => {
    let name, directorProperName;
    if(req.query.director){
        name = req.query.director.split("_");
        directorProperName = name[0] + " " + name[1];
        movieService.findByDirector(directorProperName.toLowerCase(), (movies) => {
            if(movies.length > 0){
                res.status(200).json({ movies : movies });
            } else {
                res.status(404).json({ director : "No movies found with matching director name" })
            }
        });
        
    }else{
        res.status(400).json({ director : "Invalid request to backend: Malformed URL" })
    }
})

//@ROUTE /genre?genre=<genre_label>
//@USE find movie with genre
router.get("/genre", (req, res) => {
    let genre;
    if(req.query.genre){
        genre = req.query.genre;
        movieService.findByGenre(genre.toLowerCase(), (movies) => {
            if(movies.length > 0){
                res.status(200).json({ movies : movies });
            } else {
                res.status(404).json({ genre : "No movies found with matching genre" })
            }
        });
    } else {
        res.status(400).json({ genre : "Invalid request to backend: Malformed URL" })
    }
})

module.exports = router;