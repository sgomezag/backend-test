const express = require("express");
const Model = require("./model");
const router = express.Router();

router.get("/", async function(req, res) {
    try {
        const data = await Model.find()
        data.map((element, index) => {
            console.log(element.questionText)
        }) 
        const shuffledData = data.sort(() => 0.5 - Math.random());
        res.send(shuffledData)
    } catch (error) {
        res.send("Error getting data")
    }
});

router.get("/:id", async function(req, res){
    try {
        const data = await Model.find({_id:req.params.id})
        const estaVariable = data[0].questionText;
        console.log(data)
        console.log(estaVariable)
        res.send(data)
    } catch(error) {
        res.send("Error getting data")
    }
})

router.post("/edit", async function(req, res){
    try {
        const body = req.body;
        const data = await Model.findOneAndUpdate({_id:body.id}, {questionText:body.new_questionText})
        res.send("Oh Yeah!")
    } catch(error) {
        res.send("Error getting data")
    }
})


router.post("/create", async function(req, res) {
    const new_data = {
        questionText : req.body.texto,
        categoryQuestion : req.body.categoria
    }
    const new_question = new Model(req.body);
    try {
        const result = await new_question.save();
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
});



module.exports = router;