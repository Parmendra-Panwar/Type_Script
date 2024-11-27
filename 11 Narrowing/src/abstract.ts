abstract class TakePhoto{
  constructor(
    public cameraMode :string,
    public cameraType :string,
  ){}

  abstract getSpepia(): void

  getReelTime(): number{
    return 0;
  }
}

class InstaGram extends TakePhoto{
  constructor(
    public cameraMode : string,
    public cameraType : string
    ){
      super(cameraMode , cameraType)
    }
    getSpepia(): void {
      console.log('Instagram Spepia')
    }
}
// const Paras = new InstaGram("test","test")
