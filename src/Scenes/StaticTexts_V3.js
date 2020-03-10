/* T E X T O S  E S T Á T I C O S */
/*

Versión 3:
    Usando this.make.text(diccionario)

En este caso se crea un array de diccionarios en ../modules/text.js y esto permite que sea mucho más personalizable y poder crear estilos únicos para diferentes personajes.


Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Text.html
https://photonstorm.github.io/phaser3-docs/Phaser.Types.GameObjects.Text.html#.TextStyle
*/

import { crearTexto } from '../modules/text.js'


class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene StaticTexts_V3');
    }
    preload() {
    }

    create() {
        this.texto = this.make.text(crearTexto('Todos muertos ;..;'));
        this.texto = this.make.text(crearTexto('Todos muertos \n ;..;', 2, {color: '#ffffff'}));
    }

    update(time, delta) {

    }
}

export default Bootloader;