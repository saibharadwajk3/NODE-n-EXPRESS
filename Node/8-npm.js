//npm --global command comes with node
//npm --version

//local dependency-use it only for particular project
//npm i <packageName>

//global dependency -use it for any project
//npm install -g <packageName>
//sudo install -g<packageName>(windows)

//package.json -manifest file(stores important info about projects/packages)
//can be created in three ways
//1)manually(create package.json in root and create properties)
//2)step by step (npm init)
//3)everything at once (npm init-y)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newitems = _.flattenDeep(items);
console.log(newitems);