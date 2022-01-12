const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/",async (req,res) => {
    try {
        const moviesByRuntimeAsc = await MovieModel.find().sort({runtime: 1});
        const moviesByRuntimeDesc = await MovieModel.find().sort({runtime: -1});
        if(req.query.order == "desc") res.json(moviesByRuntimeDesc);
        else res.json(moviesByRuntimeAsc);
    } catch (err) {
        res.json(err)
    }
});

module.exports = router;