const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/:runtime", async (req, res) => {
  try {
    const moviesByRuntime = await MovieModel.find({
      runtime: req.params.runtime,
    });
    res.json(moviesByRuntime);
    console.log(
      `We found ${moviesByRuntime.length} movies with ${req.params.runtime} min `
    );
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const moviesByRuntime = await MovieModel.find({
      runtime: { $gte: req.body.min, $lte: req.body.max },
    });
    res.json(moviesByRuntime);
    console.log(
      `We found ${moviesByRuntime.length} movies with [${req.body.min}min,${req.body.max}min] duration`
    );
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
