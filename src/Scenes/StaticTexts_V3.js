/* T E X T O S  E S T Á T I C O S */
/*

Versión 3:
    Usando this.make.text(diccionario)

En este caso se crea un array de diccionarios en ../modules/text.js y esto permite que sea mucho más personalizable y poder crear estilos únicos para diferentes personajes.


Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Text.html
https://photonstorm.github.io/phaser3-docs/Phaser.Types.GameObjects.Text.html#.TextStyle
*/

import { crearTexto } from '../modules/text.js'

var i = 0;
var auxTexto = '';

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
        this.texto = this.make.text(crearTexto('Si lees esto:'));
        this.texto = this.make.text(crearTexto('Soy un texto random.', 1,{fontSize: 10, padding:{top: 5, bottom: 5, left: 5, right: 5}})).setY(50);
        this.texto = this.make.text(crearTexto('Estás muerto \n ;..;', 2, {color: '#ffffff'}));
        auxTexto = this.texto.text;
        this.texto.text = '';
    }

    update(time, delta) {
        if(i < auxTexto.length){
            sleep(150);
            this.texto.text += auxTexto[i];
            i++;
        }
    }
    
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

export default Bootloader;