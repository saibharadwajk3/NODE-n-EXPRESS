//check read file example
//check server request code while is async and use event loop

//started os process
console.log("start");
setTimeout(() => {
    console.log(
        "i am a callback ,i am in event loop,i will be executed only after all non call back code is done"
    );
}, 0);
console.log("end");
//completed and exited os process