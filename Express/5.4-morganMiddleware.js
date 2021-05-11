//middle ware can be 1))user defined 2)express provided(app.use(express.static('folder')))3)third party (morgan)
const app = require("express")();
const morgan = require("morgan");

app.use(morgan("tiny"));

//home
app.get("/", (req, res) => {
    res.send("Home");
});
//about
app.get("/about", (req, res) => {
    res.send("About");
});
//products
app.get("/api/products", (req, res) => {
    console.log(req.user);
    res.send("products");
});
//items
app.get("/api/items", (req, res) => {
    res.send("items");
});

app.listen(5000, () => {
    console.log("app is listening at 5000");
});