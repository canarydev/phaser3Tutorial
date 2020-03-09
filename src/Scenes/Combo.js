/* Crear un COMBO */
/*
Un combo es una combinación de teclas para hacer algo específico.

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Types.GameObjects.html
*/

import { keymap } from '../modules/keys.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Combo')
    }
    preload() {
        this.load.setPath('./assets/');
        this.load.image('cubix');
    }

    create() {
        this.cubix = this.add.image(50, 100, 'cubix');

        this.input.keyboard.createCombo(
            [keymap.arriba, 
                keymap.abajo, 
                keymap.izquierda,
                keymap.derecha],
            { resetOnMatch: true });

        this.input.keyboard.on('keycombomatch', () => {
            console.log("El combo dominicano.")
        });
    }
    
    update() {
    }

}
export default Bootloader;