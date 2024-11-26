const user = {
  name: "paras",
  email :"xyz@gmail.com",
  isActive:true
}

function createUser(user : {username: string , Paid: boolean}):{name: string , isPaid: boolean}{
  return {name : user.username , isPaid: user.Paid} 
}

let newUser = {username:"d",Paid:true}

createUser(newUser)



function createCourse():{name: string , isPaid:boolean}{
  return {name:"string" , isPaid:true}
} 


export {}