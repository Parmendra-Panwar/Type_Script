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
  protected _courseCount = 1
  constructor(
    public name:string, 
    public age:number,
    protected id: string
  ) {
    name = name ,
    age ,
    id 
  }

  get getAppleEmail():string{
    return `apple${this.name}@gmail.com`
  }
  get courseCount(): number{
    return this._courseCount
  }
  set courseCount(value: number){
    this._courseCount = value
  }
  private deleteToken(){
    console.log("Tokendeleted")
  }
  
  // set courese (courseNum) {
  //   this._courseCount = courseNum
  // }
}
let Paras = new User("zcx" , 1 , "asd")
console.log(Paras)
let u = Paras.courseCount
console.log(u)

class SubUser extends User{
  isFamily : boolean =true
  changeCourseCount(){
    this._courseCount = 10
  }
}

//Class Part 2 ended

// export {}