/* T I M E L I N E S */
/*
Un Timeline es una línea de tiempo en la que se pueden ejecutar múltiples Tweens.

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Tweens.html
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
        /*
        //Una primera forma de crear un Timeline
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
        */

        /* Una segunda forma de crear un Timeline */
        
        this.timeline = this.tweens.timeline({
            targets: [this.cubix],
            //duration: 1000, //Duración de cada tween
            //totalDuration: 1000, //Duración total de todos los tweens juntos
            loop: -1,
            paused: true, // si lo pauso  ↴
            tweens: [
                {
                    targets: [this.cubix],
                    x: 200
                },
                {
                    targets: [this.cubix],
                    y: 200,
                    offset: 500 //adelanta la duración para que se realice a los 500ms
                    //offset: "-=200"
                },
                {
                    targets: [this.cubix],
                    x: 50
                },
                {
                    targets: [this.cubix],
                    y: 50
                }
            ]
        });
        this.timeline.play(); // hay que darle al play ↲
    }

    update(time, delta) {

    }
}

export default Bootloader;