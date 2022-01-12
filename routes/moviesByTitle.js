const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/:title",async (req,res) => {
    try {
        const moviesByTitle = await MovieModel.find({title: new RegExp(`${req.params.title}`,'i') });
        res.json(moviesByTitle);
        console.log(`We found ${moviesByTitle.length} movies including "${req.params.title}" title`);
    } catch (err) {
        res.json(err)
    }
});


module.exports = router;