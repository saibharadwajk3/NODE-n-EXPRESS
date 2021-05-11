const express = require("express");
const app = express();
const people = require("./people");
const people2 = require("./auth");
app.use(express.static("./Test_Methods"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", people);
app.use("/login", people2);
app.listen(5000, () => {
    console.log("app running at port 5000");
});