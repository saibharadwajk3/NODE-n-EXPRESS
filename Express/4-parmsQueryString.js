const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
    res.send(`<h1>Home page</h1> <a href="/api/products">Products</a>`);
});

//deStructure and send only particular data
app.get("/api/products", (req, res) => {
    //  res.json(products);  send all jason data

    //deStructure and send only particular data
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProduct);
});

//send description of particular product

// app.get("/api/products/1", (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1);

//     res.json(singleProduct);
// });

//but this is not a practical solution .imagine we have 200 products we cat hard code 200 ids and set up 200 routs.

//in express we have rout parameter we use them

app.get("/api/products/:productID", (req, res) => {
    //console.log(req.params);
    const { productID } = req.params;
    // console.log(productID);
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );
    if (!singleProduct) {
        return res.status(400).send("product does not exist");
    }
    res.json(singleProduct);
});

//this requests can get intemidating

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params);
    res.send("particular review of particular product ");
});

//query strings
//used to send small amounts of information to server using url(to query database)
//check (https://hn.algolia.com/api) anything after ? is query string

app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query;
    let sortedProduct = [...products];

    if (search) {
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit));
    }

    if (sortedProduct.length < 1) {
        // res.status(200).send("no products matched your search");
        return res.status(200).json({ success: true, data: [] });
    }

    return res.status(200).json(sortedProduct);
});

app.listen(5000, () => {
    console.log("app is listening at 5000");
});