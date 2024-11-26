"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 22;
score = "22";
var paras = {
    name: "paras",
    age: 22
};
var Parmendra = {
    username: "Parmendra",
    age: 22
};
// function getId(id : number | string){
//   // calling API
//   console.log(`DB id is: ${id}`)
// }
getId(3);
getId('22');
function getId(id) {
    // id.toLowerCase()
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    if (typeof id === 'number') {
        id.toString();
    }
}
//Array 
var type1 = [1, 2, 3,];
var type2 = ['a', 'ab', 'abc'];
var type3 = [1, 2, 3];
var type4 = ["1", "2", "3"];
var type5 = [1, 2, 'a', 'ab'];
//
var seatAllotment;
seatAllotment = "a";
seatAllotment = "b";
