/* Diferentes formas de cambiar el color a una imagen */
/*

He creado cinco funciones sencillas que nos permiten cambiar el color, hacer invisibles o modificar el parámetro aplha a los elementos que tenemos en pantalla.

colorRed -> Pulsando espacio.
greenClick -> Haciendo click.
blueOver -> Pasando el ratón por encima.
setAlpha -> Pulsando A.
setInvisible -> Pulsando I.

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Image.html
*/

import { keymap } from '../modules/keys.js'
import { colorRed, greenClick, blueOver, setAlpha, setInvisible } from '../modules/controls.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Colors')
    }
    preload() {
        this.load.setPath('./assets/');
        this.load.image(['logo_gamma', 'cubix', 'cubix_fondo', 'drop']);
    }

    create() {
        this.cubix = this.add.image(50, 100, 'cubix').setInteractive();
        this.cubix_fondo = this.add.image(50, 200, 'cubix_fondo').setInteractive();

        this.keys = this.input.keyboard.addKeys(keymap);
    }
    
    update() {
        colorRed(this.keys, this.cubix);
        greenClick(this.input);
        blueOver(this.input);
        setAlpha(this.keys, this.cubix);
        setInvisible(this.keys, this.cubix);
    }

}
export default Bootloader;