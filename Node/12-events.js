//like js in client side ,where we run functions in response to external events(mouse click ,hover,button click),Server side js (nodejs) also is a heavily event driven programming.we wait for event to happen by registering some function to it.once the event fires we run the function .
//event driven programming is heavily used in node.js
//most node modules use events under the hood

//first listen for event then respond

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("respond", () => {
    console.log("emitter emitted an respond event so i am responding to it");
});

customEmitter.on("fuck boi", (fuckLike, howManyTimes) => {
    console.log(
        `eventEmitter asked me to fuck like ${fuckLike},so i will fuck like a ${fuckLike} ${howManyTimes} times`
    );
});

customEmitter.emit("respond");
customEmitter.emit("fuck boi", "dog", 300); //you can pass arguments to call back function from second arguments onwards after matching event parameter in first argument