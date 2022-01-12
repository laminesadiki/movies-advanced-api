const router = require("express").Router();

router.get("/byQuery",(req,res) => {
    res.json(req.query);
})



module.exports = router;