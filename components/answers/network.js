const express = require("express");
const router = express.Router();
const Model = require("./model");

router.get("/", async function(req, res) {
    try {
        const data = await Model.find()
        res.send(data)
    } catch (error) {
        res.send("Error getting data")
    }
});

router.post("/create", async function(req, res) {
    
    const new_answer = new Model(req.body);
    try {
        const result = await new_answer.save();
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
});

module.exports = router;