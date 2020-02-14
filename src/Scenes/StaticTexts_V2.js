/* T E X T O S  E S T Á T I C O S */
/*

Muestra un mensaje por pantalla.

Versión 2:
    Usando this.make.text(diccionario);


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
        //Segunda forma de hacer textos
        var texto = {
            x: 10,
            y: 100,
            text: "Hola mundo.\n¿Qué tal?",
            style: {
                color: "#000000",
                fontSize: 30,
                backgroundColor: '#ffffff',
                fontStyle: 'Bold Italic',
                padding: {
                    top: 15,
                    bottom: 40,
                    right: 10,
                    left: 10
                },
                align: 'center'
            }
        };
        this.make.text(texto);
    }
    update(time, delta) {

    }
}

export default Bootloader;