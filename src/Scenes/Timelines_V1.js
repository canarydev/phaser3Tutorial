/* T I M E L I N E S */
/*
Un Timeline es una línea de tiempo en la que se pueden ejecutar múltiples Tweens.

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Tweens.Timeline.html
https://photonstorm.github.io/phaser3-docs/Phaser.Types.Tweens.html
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
        this.cubix = this.add.image(50, 50, 'cubix');
        
        this.timeline = this.tweens.createTimeline();

        this.timeline.add({
            targets: [this.cubix],
            x: 200

        });
        this.timeline.add({
            targets: [this.cubix],
            y: 200

        });
        this.timeline.add({
            targets: [this.cubix],
            x: 50

        });
        this.timeline.add({
            targets: [this.cubix],
            y: 50

        });

        this.timeline.play();
    }

    update(time, delta) {

    }
}

export default Bootloader;