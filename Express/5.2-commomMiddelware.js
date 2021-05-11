const app = require("express")();
//req=>middleware=>res
const logger = require("./5.1-logger");
//use logger for all routs

//app.use(logger);
app.use("/api", logger); //apply to only to routs which starts with  api
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
    res.send("products");
});
//items
app.get("/api/items", (req, res) => {
    res.send("items");
});

app.listen(5000, () => {
    console.log("app is listening at 5000");
});