const express = require("express");
const app = express();

const { products } = require("./data");

// app.get("/", (req, res) => {
//     res.json([{ name: "john" }, { name: "smilga" }]);
// });

app.get("/", (req, res) => {
    res.json(products);
});

app.listen(5000, () => {
    console.log("app is listening at 5000");
});