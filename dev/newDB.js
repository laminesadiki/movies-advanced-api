const router = require("express").Router();
const db = require("../old_db.json");

router.get("/db",(req,res) => {
    let movies = [...db.movies];
    for(let movie of movies){
        movie.director = movie.director.split(",").map(el => el.trim());
        movie.actors = movie.actors.split(",").map(el => el.trim());
        movie.year = +movie.year;
        movie.runtime = +movie.runtime;
    }

    res.json(movies);
    console.log("new DB is done");

})


module.exports = router;