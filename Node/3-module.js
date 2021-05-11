//to import a module use require

const names = require("./3.1-consts");
const sayHi = require("./3.2-func");
const bio = require("./3.3-alterway");
//console.log(names);

//sayHi(names.john);
//sayHi(names.peter);
//console.log(bio.FirstPerson.job);
require("./3.4-reqexp"); //when you import a module you are invoking it(think of require express code)

//built in modules

//(os,path,fs,http)