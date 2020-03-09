/* A N I M A C I O N E S */
/*
Coge un conjunto de sprites y crea una animación. Hay dos formas de crearlos, con atlas y sin ellos.

Este ejemplo es sin atlas, la forma más básica de crear una animación.

Las imágenes pueden estar hechas de dos maneras distintas; con espaciado y sin espaciado.
En nuestro caso, 'tomato.png' es sin espaciado, y 'tomato_spacing.png' tiene un espaciado de 2px.

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Animations.html
*/

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Animations_V2');
    }
    preload() {
        this.load.path = './assets/';
        this.load.spritesheet('tomato', 'tomato.png', {
            frameWidth: 16,
            frameHeight: 25
        });

        this.load.spritesheet('tomato_spacing', 'tomato_spacing.png', {
            frameWidth: 16,
            frameHeight: 25,
            margin: 1,
            spacing: 2
        });
    }

    create() {
        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(2);
        this.anims.create({
            key: 'tomato_walk', // Nombre de la animación.
            frames: this.anims.generateFrameNumbers('tomato', {
                start: 0,       // Comienza en el frame 0
                end: 7          // hasta el 7
            }),
            repeat: -1,         // Nº de veces que se repetirá la animación. -1 = infinito
            frameRate: 12       // Frames por segundo
        });


        //Dos maneras de darle al play (sólo hay que elegir 1):
        this.tomato.play('tomato_walk');
        // o
        this.anims.play('tomato_walk', this.tomato);


        this.tomato_spacing = this.add.sprite(100, 200, 'tomato_spacing', 8).setScale(2); // así se muestra un frame concreto.
    }

    update(time, delta) {

    }
}

export default Bootloader;