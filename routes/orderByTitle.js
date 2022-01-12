const router = require("express").Router();
const MovieModel = require("../models/Movie");

router.get("/",async (req,res) => {
    try {
        const moviesByTitleAsc = await MovieModel.find().sort({title: 1});
        const moviesByTitleDesc = await MovieModel.find().sort({title: -1});
        if(req.query.order == "desc") res.json(moviesByTitleDesc);
        else res.json(moviesByTitleAsc);
    } catch (err) {
        res.json(err)
    }
});


module.exports = router;
