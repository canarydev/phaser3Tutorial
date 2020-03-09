/* M O U S E (o pointer) */
/*

Drag and Drop. Agarra un gameObject draggable y lo mantiene en la zona de dropeo.

Ayuda:  https://photonstorm.github.io/phaser3-docs/Phaser.Input.Events.html#event:POINTER_DOWN <-- Los demás eventos están justo debajo (^.^)
*/

import { keymap } from '../modules/keys.js'
import { pointer, greenClick, blueOver, requestPointer, releasePointer, moveBlockPointer, drag } from '../modules/controls.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Mouse_V3')
    }
    preload() {
        this.load.setPath('./assets/');
        this.load.image(['cubix', 'cubix_fondo', 'drop']);
    }

    create() {
        this.cubix = this.add.image(50, 100, 'cubix').setInteractive();
        this.input.setDraggable(this.cubix); //permite arrastrarlo
        this.cubix_fondo = this.add.image(50, 200, 'cubix_fondo').setInteractive();

        this.drop = this.add.image(250, 250, 'drop').setDepth(-1).setInteractive();

        this.keys = this.input.keyboard.addKeys(keymap);

        moveBlockPointer(this.input, this.cubix_fondo);
    }
    
    update() {
        drag(this.input, this.drop);
    }

}
export default Bootloader;