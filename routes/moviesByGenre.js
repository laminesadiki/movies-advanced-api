const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/:genre", async (req, res) => {
  try {
    const moviesByGenre = await MovieModel.find({
      genres: {$in: req.params.genre},
    });
    res.json(moviesByGenre);
    console.log(`We have ${moviesByGenre.length} movies in ${req.params.genre} genre`);
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;