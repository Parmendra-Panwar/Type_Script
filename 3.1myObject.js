"use strict";
// const user = {
//   name: "paras",
//   email :"xyz@gmail.com",
//   isActive:true
// }
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createUser({ name: "", email: "", isActive: false });
