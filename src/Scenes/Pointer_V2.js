/* P O I N T E R (ratón) */
/*

Este script realiza el movimiento de un gameObject (en este caso cubix_fondo) y bloquea o libera el uso del ratón.

Ayuda:  https://photonstorm.github.io/phaser3-docs/Phaser.Input.Events.html#event:POINTER_DOWN <-- Los demás eventos están justo debajo (^.^)
*/
import { keymap } from '../modules/keys.js'
import {requestPointer as requestPointer, releasePointer as releasePointer, moveBlockPointer as moveBlockPointer } from '../modules/controls.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Mouse_V2');
    }
    preload() {
        this.load.setPath('./assets/');
        this.load.image(['cubix', 'cubix_fondo']);
    }

    create() {
        this.cubix = this.add.image(50, 100, 'cubix').setInteractive();
        this.cubix_fondo = this.add.image(50, 200, 'cubix_fondo').setInteractive();

        this.keys = this.input.keyboard.addKeys(keymap);

        moveBlockPointer(this.input, this.cubix_fondo);

    }
    
    update() {
        requestPointer(this.input);
        releasePointer(this.input, this.keys);
    }

}
export default Bootloader;