const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/",async (req,res) => {
    try {
        const moviesAscYear = await MovieModel.find().sort({year: 1});
        const moviesDescYear = await MovieModel.find().sort({year: -1});
        if(req.query.order == "desc") res.json(moviesDescYear);
        else res.json(moviesAscYear);
    } catch (err) {
        res.json(err)
    }
});


module.exports = router;