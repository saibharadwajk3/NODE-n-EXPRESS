const http = require("http");
const server = http.createServer((req, res) => {
    try {
        if (req.url === "/") {
            res.end("I am glad that you are here");
        } else if (req.url === "/about") {
            res.end("here is our short story");
        } else {
            res.end(`<h1>oops!</h1>
          <p>page not found</p>
          <a href="/">back home</a>`);
        }
    } catch (e) {
        console.log(e);
    }
});
server.listen(5000);