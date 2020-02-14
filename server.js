const express = require('express');
const app = express();
const PORT = 4200;
const movies = require("./routes/movieRoutes.js");


app.use("/movies", movies);

app.get("/", (req,res) =>{
    res.json({ test: "test"});
})


app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
})
