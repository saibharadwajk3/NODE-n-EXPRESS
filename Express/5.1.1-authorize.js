// const authorize = (req, res, next) => {
//     console.log("slimShady");
//     next();
// };

const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === "john") {
        //this id token  may be pulled from db and sent to next function ,attached to req/res object
        req.user = { name: "john", id: 3 };
        next();
    } else {
        return res.status(401).send("Unauthorized");
    }
    next();
};

module.exports = authorize;