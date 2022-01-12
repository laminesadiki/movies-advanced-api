const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie");
const movieValidation = require("../validation");

// ADD New Movie
router.post("/", async (req, res) => {
  // Validate the data before adding a movie
  const { error } = movieValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // Check if the movie id is already in the database
    const isMovieExist = await MovieModel.findOne({ id: req.body.id });
    if (isMovieExist)
      return res
        .status(400)
        .send(`This Movie id = ${req.body.id} is already exist`);

    const newMovie = new MovieModel(req.body);
    const savedMovie = await newMovie.save();
    res.json(savedMovie);
    console.log(savedMovie);
  } catch (err) {
    res.json(err);
    console.error(err);
  }
});

// DELETE a movie
router.delete("/:movieId", async (req, res) => {
  try {
    const deletedMovie = await MovieModel.deleteOne({ id: req.params.movieId });
    res.json(deletedMovie);
  } catch (err) {
    res.json(err);
  }
});

// UPDATE a movie
router.patch("/:movieId", async (req, res) => {
  try {
    const updatedMovie = await MovieModel.updateOne(
      { id: req.params.movieId },
      { $set: req.body }
    );
    res.json(updatedMovie);
    console.log(`The Movie with id=${req.params.movieId} is Updated !`);
  } catch (err) {
    res.json(updatedMovie);
  }
});

module.exports = router;
