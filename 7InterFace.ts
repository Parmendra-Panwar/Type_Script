//basic InterFace
interface User {
  readonly dbId: number
  email : string,
  userId: number,
  gogleId?:string,
  // startTrail: () => string
  startTrail(): string | number ,
  getCoupon ? (couponname: string[], num: number ) :number
}

let Parmendra : User = {
  email:"",
  userId:1,
  dbId:2,
  startTrail: () =>{
    return "Trail Started"
  },
  getCoupon : ( name : ["NA","HA"] , num: 21 ) =>{
    return 10
  }
}

//we can change as well the value



export {}