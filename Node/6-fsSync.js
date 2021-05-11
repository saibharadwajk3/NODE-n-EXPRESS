const { readFileSync, writeFileSync } = require("fs");
console.log("started reading \u{1F600}");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

//writing to file

// writeFileSync("./content/result.txt", `here is the result:${first},${second}`, {
//     flag: "a",
// });
console.log("started writing  \u{1F600}");
writeFileSync("./content/result.txt", "fuck you ezikel", {
    flag: "a",
});
console.log("process completed  \u{1F600}");