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
  city  : string = "Ahamdabad" //can assign ? to ignore the issue on not assign or use
  constructor(
    public name:string, 
    public age:number,
    protected id: string
  ) {
    name = name ,
    age ,
    id 
  }
}
let Paras = new User("zcx" , 1 , "asd")
console.log(Paras)

//Class Part 2 ended

// export {}