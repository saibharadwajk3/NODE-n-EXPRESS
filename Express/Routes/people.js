const express = require("express");
const router = express.Router();
let { people } = require("../data");
router.post("/postman", (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name" });
    }
    res
        .status(201)
        .send({ success: true, data: [...people, { id: 6, name: name }] });

    // res.send("posted successfully");
});
//get
router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

//put method

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `No user with  id ${id} found` });
    }

    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }

        return person;
    });

    res.status(200).json({ success: true, data: newPerson });
});

//delete
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `No user with  id ${id} found` });
    }

    const newPerson = people.filter((person) => person.id !== Number(id));

    res.status(200).json({ success: true, data: newPerson });
});

//make it much cleaner by using controller file see last 10 min of video

module.exports = router;