/* Movimiento básico usando modularidad */
/*
La modularidad nos permite obtener un código más limpio y legible, a la vez que fomenta la reutilización del mismo.

Los módulos nos permiten abstraernos de las operaciones que realizan y así podemos centrarnos más en la funcionalidad del programa principal.

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Types.GameObjects.html
*/

import { keymap } from '../modules/keys.js'
import { move } from '../modules/controls.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Movement_V2')
    }
    preload() {
        this.load.setPath('./assets/');
        this.load.image('cubix');
    }

    create() {
        this.cubix = this.add.image(50, 100, 'cubix');
        this.keys = this.input.keyboard.addKeys(keymap);
    }
    
    update() {
        const EVENT = Phaser.Input.Events;
        move(this.keys, this.cubix);
    }

}
export default Bootloader;