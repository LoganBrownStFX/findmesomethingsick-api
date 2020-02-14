const express = require("express");
const router = express.Router();
const movies = require("../movies-mock.js");
const movieService = require("../services/movieService");

router.get("/", (req,res) => {
    //TODO: use database to query results
    res.json({ movies: movies })
})

//@ROUTE /actor?actor=<actor_first_name>_<actor_last_name>
//@USE find movie with actor
router.get("/actor", (req, res) => {
    let name, actorProperName;
    if(req.query.actor){
        name = req.query.actor.split("_");
        actorProperName = name[0] + " " + name[1];
        let movies = movieService.findByActor(actorProperName);
        if(movies.length > 0){
            res.status(200).json({ movies: movies })
        }else{
            res.status(404).json({ movies : "No movies found with matching actor name"})
        }
    } else {
        res.status(400).json({ movies: "Invalid request to backend" })
    }
})

module.exports = router;