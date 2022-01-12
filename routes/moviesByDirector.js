const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/:director", async (req, res) => {
  try {
    const moviesByDirector = await MovieModel.find({
        director: {$in: req.params.director},
    });
    res.json(moviesByDirector);
    console.log(`${req.params.director} Director have ${moviesByDirector.length} movies`);
  } catch (err) {
    res.json(err);
  }
});



module.exports = router;