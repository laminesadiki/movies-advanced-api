const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/:id",async (req,res) => {
    try {
        const movie = await MovieModel.findOne({id: req.params.id})
        res.json(movie);
    } catch (err) {
        res.json(err)
    }
});



module.exports = router;