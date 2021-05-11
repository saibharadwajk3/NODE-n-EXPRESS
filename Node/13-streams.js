//in node js streams are used to read and write sequentially
//used when we want to handel a continuous stream of data or big files streams comemin real handy
//there are four streams
//    1)writable
//    2)readable
//    3)duplex
//     4)transform(data can be modified while reading or writing)

//streams extend event emitters
//many built in modules implement stream interface

const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt", {
    highWaterMark: 90000,
    encoding: "utf-8",
});
stream.on("data", (result) => {
    console.log(result);
});
stream.on("error", (err) => {
    console.log(err);
});