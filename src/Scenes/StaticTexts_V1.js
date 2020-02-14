/* T E X T O S  E S T Á T I C O S */
/*

Muestra un mensaje por pantalla.

Versión 1:
    Usando this.add.text(x, y, texto, diccionario);


Ayuda: https://phaser.io/docs/2.6.2/Phaser.Text.html
*/

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene StaticTexts_V1');
    }
    preload() {
    }

    create() {
        var texto = this.add.text(10, 100, "Hola mundo.\n¿Qué tal?", {
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
        });
        
        //texto ahora es un gameObject y puede ser tratado como tal:
        /*
        texto.setText('Soy un nuevo texto.')
        texto.flipY = true;
        texto.alpha = 0.5;
        texto.x = 0;
        */
    }

    update(time, delta) {

    }
}

export default Bootloader;