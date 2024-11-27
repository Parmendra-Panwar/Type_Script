"use strict";
class TakePhoto {
    constructor(cameraMode, cameraType) {
        this.cameraMode = cameraMode;
        this.cameraType = cameraType;
    }
    getReelTime() {
        return 0;
    }
}
class InstaGram extends TakePhoto {
    constructor(cameraMode, cameraType) {
        super(cameraMode, cameraType);
        this.cameraMode = cameraMode;
        this.cameraType = cameraType;
    }
    getSpepia() {
        console.log('Instagram Spepia');
    }
}
// const Paras = new InstaGram("test","test")
