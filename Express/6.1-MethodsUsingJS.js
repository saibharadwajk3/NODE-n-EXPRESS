const express = require("express");
const app = express();
let { people } = require("./data");
app.use(express.static("./Test_Methods"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//post request

app.post("/api/people", (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name" });
    }
    res.status(201).json({ success: true, person: name });
});

//get
app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
    console.log("app running at port 5000");
});