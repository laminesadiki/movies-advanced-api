const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/:actor", async (req, res) => {
  try {
    const moviesByActor = await MovieModel.find({
      actors: {$in: req.params.actor},
    });
    res.json(moviesByActor);
    console.log(`${req.params.actor} Actor has ${moviesByActor.length} movies`);
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;