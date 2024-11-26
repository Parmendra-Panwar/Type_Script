// console.log("HI jadu")

class User {
  readonly name : string
  age : number 
  city  : string = "Ahamdabad" //can assign ? to ignore the issue on not assign or use
  constructor(name:string, age:number) {
    this.name = name,
    this.age = age
  }
}

let Paras = new User("zcx" , 1)

console.log(Paras.city.toLowerCase())

// Paras.city= 1 // not allowed
Paras.city = "ParasCity"

export {}