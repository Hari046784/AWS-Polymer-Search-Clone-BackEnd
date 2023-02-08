const express = require("express");
const router = express.Router();
const mongo = require("../Shared/mongo");

router.get("/", async (req, res) => {

    let language=await mongo.repo.aggregate([
        {$group: { _id: "$language",count:{$sum: 1}}},
        {$project: {_id:0,language:"$_id",count:1}}]).toArray()
    
    res.status(200).send(language);
    console.log("Language:",language);

});

module.exports = router;