// const user = {
//   name: "paras",
//   email :"xyz@gmail.com",
//   isActive:true
// }

// function createUser(user : {username: string , Paid: boolean}):{name: string , isPaid: boolean}{
//   return {name : user.username , isPaid: user.Paid} 
// }

// let newUser = {username:"d",Paid:true}

// createUser(newUser)



// function createCourse():{name: string , isPaid:boolean}{
//   return {name:"string" , isPaid:true}
// } 

type User = {
  name :string ;
  email :string;
  isActive: boolean;
}

function createUser(user:User):User{
  return {name: user.name , email:user.email,isActive:user.isActive   }
}

createUser({name: "" , email: "", isActive: false})

export {}