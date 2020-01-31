/* T I M E L I N E S */
/*
Un Timeline es una línea de tiempo en la que se pueden ejecutar múltiples Tweens.
*/

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Timelines');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix', 'cubix_fondo']);
    }

    create() {
        this.cubix = this.add.image(100, 100, 'cubix');
        this.timeline = this.tweens.createTimeline();
    }

    update(time, delta) {

    }
}

export default Bootloader;