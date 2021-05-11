const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("./REVERSING"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./REVERSING/index.html"));
});
app.get("*", (req, res) => {
    res.status(400).send("Resource not found");
});

//app.listen()
app.listen(5000, () => {
    console.log("app is listening on port 5000");
});