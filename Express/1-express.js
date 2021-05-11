const express = require("express");
const app = express();

//app.get()
app.get("/", (req, res) => {
    res.send("Home page");
});
app.get("/about", (req, res) => {
    res.send("About");
});
//app.all()
app.all("*", (req, res) => {
    res.status(400).send("res not found");
});

//app.listen()
app.listen(5000, () => {
    console.log("app is listening on port 5000");
});

//app.post()
//app.put()
//app.delete()
//app.use()