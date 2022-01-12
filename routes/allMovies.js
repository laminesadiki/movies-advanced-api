const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/",async (req,res) => {
    try {
        const movies = await MovieModel.find();
        res.json(movies);
    } catch (err) {
        res.json(err)
    }
});


module.exports = router;