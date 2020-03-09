/* I N T E R P O L A C I O N E S */
/* 
Se usan para mover un objeto del punto A al punto B.

Ayuda aquí: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Tweens.html
*/

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Tweens');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix']);
    }

    create() {
        this.cubix = this.add.image(50,50, 'cubix').setScale(.5);
        this.tweens = this.add.tween({
            targets: [this.cubix],
            ease: 'Bounce',
            y: 200,
            x: {
                value: 200,
                ease: 'Elastic',
                duration: 9000
            },
            repeat: 0,
            yoyo: true,
            //delay: 1000,
            //hold: 1000,
            //repeatDelay: 1000,
            onStart: () => {
                console.log("Comienza el tween.");
            },
            onRepeat: () => {
                console.log("Repetición.");
            },
            onYoyo: () => {
                console.log("Yoyolooooo.")
            },
            onComplete: (tween, obj, target) => {
                target.setTint(0xFF0000);
                console.log("Completado.")
            },
            onCompleteParams: [this.cubix]
        })
    }

    update(time, delta) {

    }
}

export default Bootloader;