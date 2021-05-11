const express = require("express");
const app = express();
let { people } = require("./data");

//static assets
app.use(express.static("./Test_Methods"));
//parse incoming data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//post
app.post("/login", (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`welcome ${name}`);
    } else {
        res.status(401).send("please provide credentials");
    }
    // res.send("posted successfully");
});

app.post("/api/postman/people", (req, res) => {
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
app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

//put method

app.put("/api/people/:id", (req, res) => {
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
app.delete("/api/people/:id", (req, res) => {
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

app.listen(5000, () => {
    console.log("app running at port 5000");
});