const app = require("express")();
const logger = require("./5.1-logger");
const authorize = require("./5.1.1-authorize");

app.use([logger, authorize]);
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