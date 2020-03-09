/* P O I N T E R (ratón) */
/*

Además de las funciones que ya se han visto que se pueden realizar con el ratón (Colors.js), existen otras funciones que nos pueden resultar útiles.

La función "pointer(input, object)" muestra el manejo básico de un ratón.

Es importante notar que para el manejo de los ratones es casi único y exclusivo el uso de eventos.

Todos los eventos vendrán dados por Phaser.Input.Events.

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Input.Events.html#event:POINTER_DOWN <-- Los demás eventos están justo debajo (^.^)

*/
import { pointer} from '../modules/controls.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Mouse_V1');
    }
    preload() {
        this.load.setPath('./assets/');
        this.load.image(['cubix', 'cubix_fondo', 'drop']);
    }

    create() {
        this.cubix = this.add.image(50, 100, 'cubix').setInteractive();
        this.cubix_fondo = this.add.image(50, 200, 'cubix_fondo').setInteractive();
    }
    
    update() {
        pointer(this.input, this.cubix_fondo);
    }

}
export default Bootloader;