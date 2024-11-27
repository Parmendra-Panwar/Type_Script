const score : Array<number> = []
const names : Array<string> = []

function indentityOne(val: boolean | number):boolean|number{
  return val
}

function indentityTwo(val:any):any{
   return val
}

function indentityThree<type>(val:type):type{
  return val
}
indentityThree("paras")
indentityThree(12)
indentityThree(false)

function indentityFour<T> (val:T):T{
  return val
}//its same as three

interface Bootle{
  barand:string,
  type: string,
  id: number
}
// indentityFour<Bootle>({})  //its working ✔


function getSearchProduct<T> (products: T[]):T{
  //.....
  const myIndex = 3
  return products[myIndex]
}

const getSearchProductAero = <T> (product: T[]) : T => {
  //.....
  const myIndex = 3
  return product[myIndex]
}

//---------------Part 3---------------------

interface db {
  connection : string,
  username : string,
  czx : string
}

function anotherFunction <T,U extends number>(val1: T , val2: U):object{
  return {
    val1,
    val2
  }
} 

// anotherFunction(3,"")  // wrong becouse of second value is extended to number
console.log(anotherFunction(2,2))

interface quiz {
  type : string,
  id : number
}

interface course{
  type : string,
  id : number,
  subject : string
}

class sellable<T> {
  public cart: T[] = []

  addToCart(products: T){
    this.cart.push(products)
  }
}











