type User ={
  readonly _id : string
  name : string
  email : string
  isActive : boolean
  credCard ? : number 
}

// function createUser (u:User){}

let myUser : User = {
  _id :"213",
  name:"h",
  email: "p@p.com",
  isActive: true
}

myUser.email = "P"
// myUser._id = "" //not accpectable

export {}  