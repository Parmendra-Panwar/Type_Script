let score: number | string = 33
score = 22
score = "22"


type User = {
  name: string
  age: number
}

type Admin = {
  username: string
  age: number
}

let paras : User | Admin = {
  name :"paras", 
  age: 22
}

let Parmendra : User | Admin = {
  username: "Parmendra",
  age: 22
}

// function getId(id : number | string){
//   // calling API
//   console.log(`DB id is: ${id}`)
// }

getId(3)
getId('22')

function getId(id : number | string){
  // id.toLowerCase()
  if (typeof id === 'string') {
    id.toLowerCase()
  }
  if (typeof id === 'number') {
    id.toString()
  }
}

//Array 
const type1: number[] =[1,2,3,]
const type2: string[] =['a','ab','abc']
const type3: string[]|number[] = [1,2,3]
const type4: string[]|number[] = ["1","2","3"]
const type5: (string | number)[] = [1,2,'a','ab']

//
let seatAllotment : "a" | "b" | "c"

seatAllotment = "a"
seatAllotment = "b"
export{}