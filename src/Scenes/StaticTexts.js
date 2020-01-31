/* T E X T O S  E S T Á T I C O S */
/*



Ayuda: https://phaser.io/docs/2.6.2/Phaser.Text.html
*/

import { crearTexto } from '../modules/text.js'


class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene StaticTexts');
    }
    preload() {
    }

    create() {
        //La forma más elegante de hacer textos
        this.texto = this.make.text(crearTexto('Hola Mundo!', 0));

    }

    update(time, delta) {

    }
}

export default Bootloader;