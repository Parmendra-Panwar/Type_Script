"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
addTwo(2);
function login(name, pass) {
    if (pass === void 0) { pass = "hh"; }
    console.log(name, pass);
} //default value set using = sign 
login("shdb");
// function is18 (num:number){
//   if(num>=18){
//     return true
//   }
//   if(num<18){
//     return "NO You Are not"
//   }
// }
var getHello = function (s) {
    return " ";
};
var heros = ["thor", "spiderMan", "superMan", "ironMen"];
var heros2 = [1, 2, 3, 4, 5];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function consoleErr(errMsg) {
    throw new Error(errMsg);
}
