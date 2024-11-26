function addTwo(num:number): number{
  return num + 2;
  // return "hello"
}
addTwo(2)

function login(name:string , pass:string = "hh"){
  console.log(name,pass)
}//default value set using = sign 

login("shdb")

// function is18 (num:number){
//   if(num>=18){
//     return true
//   }
//   if(num<18){
//     return "NO You Are not"
//   }
// }

const getHello =  (s:string):string=>{
  return " "
}

const heros = ["thor","spiderMan","superMan","ironMen"]

const heros2 = [1,2,3,4,5]

heros.map((hero):string =>{
  return `hero is ${hero}`
})

function consoleError(errMsg:string):void {
  console.log(errMsg)
}

function consoleErr(errMsg:string):never {
  throw new Error(errMsg)
}
 


export {}