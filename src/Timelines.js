class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Timelines');
    }
    preload() {
        this.load.path = './assets/';
        
    }

    create() {
    }

    update(time, delta) {

    }
}

export default Bootloader;