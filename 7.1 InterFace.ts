interface User {
  readonly dbId: number
  email : string,
  userId: number,
  gogleId?:string,
  // startTrail: () => string
  startTrail(): string | number ,
  getCoupon ? (couponname: string[], num: number ) :number
}
//type can't we reopen - but InterFace can be

interface User {
  githubId?:string
}

interface Admin extends User{
  role : "ProjectManager" | "CTO"
}

let Parmendra : User = {
  githubId:"reopning" ,
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

let Parmendra2 : Admin ={
  role : "ProjectManager",
   githubId:"reopning" ,
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