const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const movies = require("./routes/movieRoutes.js");


const PORT = process.env.PORT;

//app.use(cors);
app.use("/movies", movies);

app.listen(4200, () =>{
    console.log(`App listening on port ${PORT}`);
})
