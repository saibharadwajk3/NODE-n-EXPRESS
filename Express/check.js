const http = require("http");
const { readFileSync } = require("fs");

//get files

const homePage = readFileSync("./REVERSING/index.html");
const homeCss = readFileSync("./REVERSING/style.css");
const homeJs = readFileSync("./REVERSING/script.js");

const server = http.createServer((req, res) => {
    const url = req.url;
    //t console.log(url);
    //home page
    if (url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
    } else if (url === "/style.css") {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeCss);
    } else if (url === "/script.js") {
        res.writeHead(200, { "content-type": "text/js" });
        res.write(homeJs);
    } else if (url === "/about") {
        //about page
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1>About Page</h1> <p>here is short story about us</p>`);
    } else {
        //error
        res.writeHead(400, { "content-type": "text/html" });
        res.write(`<h1>oops!</h1> <p>Page not found</p>`);
    }

    res.end();
});

server.listen(5000);