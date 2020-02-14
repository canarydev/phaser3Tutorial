/* Movimiento básico */
/*

Tercera forma de mover a nuestro personaje. Esta vez utilizando 'cursor' (no es el ratón). Son unos controles básicos predefinidos.

Ayuda: ~
*/

import { move } from '../modules/controls.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Movement_V3')
    }
    preload() {
        this.load.setPath('./assets/');
        this.load.image('cubix');
    }

    create() {
        this.cursor = this.input.keyboard.createCursorKeys(); //Crea unos controles básicos predefinidos.
        this.cubix = this.add.image(50, 100, 'cubix');
    }
    
    update() {
        move(this.cursor, this.cubix);
    }

}
export default Bootloader;