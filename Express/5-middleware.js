//middle are functions that execute during request to the server
//each middle ware has access to request and response object
//middleware are every were in express it is heart and soul of express

const app = require("express")();

//req=>middleware=>res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);

    //res.send("Testing");

    //after compleation of middle were function you can send data here itself or pass that job to next function that is our get..

    next();
};

app.get("/", logger, (req, res) => {
    //     const method = req.method;
    //     const url = req.url;
    //     const time = new Date().getFullYear();
    //     console.log(method, url, time);

    res.send("Home");
});

//what if i want to get method ,url,time for '/about' rout.copy past makes code bigger and redundant.so better solution would be to set up a function
app.get("/about", logger, (req, res) => {
    res.send("About");
});

app.listen(5000, () => {
    console.log("app is listening at 5000");
});