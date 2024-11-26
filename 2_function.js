"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(2);
function login(name, pass) {
    if (pass === void 0) { pass = "hh"; }
    console.log(name, pass);
} //default value set using = sign 
login("shdb");
