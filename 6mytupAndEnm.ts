const user: (number|string)[] = ["PP",1]
console.log(user[0]) // PP

//Specific Order when we want to insert elem in specific order
let user2: [string,number] 

user2 = ["PP",1]
// user2 = [1,"PP"] //wrong Order not Allowed

//we also can define the type first and then continue 
type User = [number , string]
let newUser:User = [11,"PP@@" ]
// let newUser:User = [11,"PP@@",12,"PP##" ] //not Allowed
newUser[0] =12

// newUser.push(false)
newUser.push(22) // this is the 

//--------------Enum--------------

// const AISLE = 0 
// const MID = 1
// const WIN = 2

// if(seat === AISLE){

// }

const enum SeatChoise {
  AISLE = 1,
  MIDDLE = "",
  WINDDOW = 2,
  FORTH =1,
}
const ppSeat = SeatChoise.AISLE



export{}