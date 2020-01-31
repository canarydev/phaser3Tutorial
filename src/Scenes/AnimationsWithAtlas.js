/* A N I M A C I O N E S  con  A T L A S*/
/*
Coge un conjunto de sprites y crea una animación. Hay dos formas de crearlos, con atlas y sin ellos.

Este ejemplo es utilizando atlas. Para crear los atlas utilizaremos esta herramienta:
https://gammafp.github.io/atlas-packer-phaser/

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Animations.html
*/

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Animations');
    }
    preload() {
        this.load.path = './assets/';

        this.load.atlas('tomato', 'tomato.png', 'atlas/tomato_atlas.json')
        this.load.animation('tomatoAnim', 'atlas/tomato_anim.json');
    }

    create() {
        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(3);
        this.tomato.anims.play('tomato_walk');
    }

    update(time, delta) {

    }
}

export default Bootloader;