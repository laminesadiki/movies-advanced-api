const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/:year", async (req, res) => {
  try {
    const moviesByYear = await MovieModel.find({
      year: req.params.year,
    });
    res.json(moviesByYear);
    console.log(`We have ${moviesByYear.length} movies produced in ${req.params.year}`);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
    try {
      const moviesByYear = await MovieModel.find({
        year: { $gte: req.body.min, $lte: req.body.max },
      });
      res.json(moviesByYear);
      console.log(
        `We found ${moviesByYear.length} movies in the period between [${req.body.min},${req.body.max}] `
      );
    } catch (err) {
      res.json(err);
    }
  });

// const db = require("../db.json");

// router.get("/:year",(req,res) => {
//     const movies = db.movies;
//     const moviesByYear = movies.filter((value,index,arr) => value.year == req.params.year);
//     res.json(moviesByYear);
//     console.log(`We have ${moviesByYear.length} movies produced in ${req.params.year}`);
// })

module.exports = router;