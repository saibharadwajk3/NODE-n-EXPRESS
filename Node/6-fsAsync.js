const { readFile, writeFile } = require("fs");

//with async you need to provide callback

console.log("started reading 😀");
readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;
        console.log("started writing  :grinning:");
        writeFile(
            "./content/result2.txt",
            `the result is :${first},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log(result);
                }
            }
        );
    });
});
console.log("process completed  😀");