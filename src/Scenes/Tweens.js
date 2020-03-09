/* I N T E R P O L A C I O N E S */
/* 
Se usan para mover un objeto del punto A al punto B.

Estas son las claves que puedes usar en el tween:
    target: Objetivos sobre los que se hará la interpolación. se meten en un array ['objetivo1', 'objetivo 2'], 
    index: El índice del objetivo dentro de la matriz de destinos de interpolación,
    key: La propiedad del objetivo a interpolar, 
    getEnd: Cuál será la propiedad al FINAL de la Interpolación,
    getStart: Establece cuál será la propiedad al INICIO de la Interpolación,
    getActive:,
    ease: La función que utiliza esta interpolación, 
    delay: Tiempo en ms / frames antes de que se inicie la interpolación.,
    duration: La duración de la interpolación en ms / frames excluye el tiempo para yoyo o repeticiones,
    yoyo: Hace que la interpolación vuelva a su valor inicial después de terminar,
    hold: Tiempo en ms / frames antes de que comience la interpolación,
    repeat: Número de veces para repetir la interpolación. La interpolación siempre se ejecutará una vez independientemente, por lo que un valor de repetición de '1' reproducirá la interpolación dos veces. Un falor de -1 hará que se repita infinitamente,
    repeatDelay: Tiempo en ms / frames antes de que comience la repetición.,
    flipX:,
    flipY:

Estas son las distintas interpolaciones que se pueden usar:
Back
Bounce
Circular
Cubic
Elastic
Expo
Linear
Quadratic
Quartic
Quintic
Sine
Stepped

Ayuda aquí: https://photonstorm.github.io/phaser3-docs/Phaser.Tweens.html 
https://photonstorm.github.io/phaser3-docs/Phaser.Tweens.Tween.html
https://photonstorm.github.io/phaser3-docs/Phaser.Types.Tweens.html
https://photonstorm.github.io/phaser3-docs/Phaser.Math.Easing.html
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