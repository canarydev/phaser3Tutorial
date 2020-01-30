class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix', 'cubix_fondo']);
    }

    create() {
        this.cubix = this.add.image(100,100, 'cubix').setScale(.5);
        this.tweens = this.add.tween({
            targets: [this.cubix],
            ease: 'Bounce',
            y: 200,
            repeat: 1,
            yoyo: false,
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
            onComplete: () => {
                console.log("Completado.")
            }
        })
    }

    update(time, delta) {

    }
}

export default Bootloader;