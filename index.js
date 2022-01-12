const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const allMovies = require("./routes/allMovies");
const moviesById = require("./routes/moviesById");
const moviesByTitle = require("./routes/moviesByTitle");
const moviesByRuntime = require("./routes/moviesByRuntime");
const moviesByYear = require("./routes/moviesByYear");
const moviesByGenre = require("./routes/moviesByGenre");
const moviesByDirector = require("./routes/moviesByDirector");
const moviesByActor = require("./routes/moviesByActor");

const orderByYear = require("./routes/orderByYear");
const orderByTitle = require("./routes/orderByTitle");
const orderByRuntime = require("./routes/orderByRuntime");

const admin = require("./routes/admin");

// Test and Develop
// const byQuery = require("./dev/byQuery");
// const newDB = require("./dev/newDB");
// app.use("/search",byQuery);
// app.use("/db",newDB);


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.DB_URL,
  () => {
    console.log("We're connectd to DB");
  }
);


app.get("/",(req,res) => {
  res.send("You're in the HOME ROUTE");
});

app.use("/movies",allMovies);

app.use("/movies/id",moviesById);
app.use("/movies/title",moviesByTitle);
app.use("/movies/runtime",moviesByRuntime);
app.use("/movies/year",moviesByYear);
app.use("/movies/genre",moviesByGenre);
app.use("/movies/director",moviesByDirector);
app.use("/movies/actor",moviesByActor);

app.use("/movies/orderbyyear",orderByYear);
app.use("/movies/orderbytitle",orderByTitle);
app.use("/movies/orderbyruntime",orderByRuntime);

app.use("/movies/api/admin",admin);



app.listen(process.env.PORT, (req,res) => {
  console.log("RUNNING SERVER ON THE 5000 PORT....");
});
