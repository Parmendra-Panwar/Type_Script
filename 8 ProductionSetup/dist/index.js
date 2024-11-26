"use strict";
// console.log("HI jadu")
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.city = "Ahamdabad"; //can assign ? to ignore the issue on not assign or use
        this.name = name,
            this.age = age;
    }
}
let Paras = new User("zcx", 1);
console.log(Paras.city.toLowerCase());
// Paras.city= 1 // not allowed
Paras.city = "ParasCity";
