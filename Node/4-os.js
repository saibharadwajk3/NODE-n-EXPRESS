const os = require("os");
//info about user

const user = os.userInfo();
//console.log(user);
//up time of system
let uptime = os.uptime() / (60 * 60);
//console.log(`the system uptime is ${uptime} hrs`);

//os object

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    archi: os.arch(),
    cpu: os.cpus(),
};
console.log(currentOs.archi);