"use strict";
// Class Part 1 started
// // console.log("HI jadu")
// class User {
//   readonly name : string
//   age : number 
//   city  : string = "Ahamdabad" //can assign ? to ignore the issue on not assign or use
//   constructor(name:string, age:number) {
//     this.name = name,
//     this.age = age
//   }
// }
// let Paras = new User("zcx" , 1)
// console.log(Paras.city.toLowerCase())
// // Paras.city= 1 // not allowed
// Paras.city = "ParasCity"
//class part 1 ended
//---------------------------------------------------
// class Part 2 Started
class User {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.city = "Ahamdabad"; //can assign ? to ignore the issue on not assign or use
        this._courseCount = 1;
        name = name,
            age,
            id;
    }
    get getAppleEmail() {
        return `apple${this.name}@gmail.com`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        this._courseCount = value;
    }
    deleteToken() {
        console.log("Tokendeleted");
    }
}
let Paras = new User("zcx", 1, "asd");
console.log(Paras);
let u = Paras.courseCount;
console.log(u);
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 10;
    }
}
//Class Part 2 ended
// export {}
