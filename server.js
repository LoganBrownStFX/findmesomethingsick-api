const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const movies = require("./routes/movieRoutes.js");
dotenv.config();

const PORT = process.env.PORT;

app.use(cors);
app.use("/movies", movies);

app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
})
