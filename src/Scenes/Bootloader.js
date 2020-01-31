/* G A M E O B J E C T S  y primeros pasos */
/*


Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Types.GameObjects.html
*/

import { keymap } from '../modules/keys.js'
import { move, colorRed, mouse, greenClick, blueOver, blockMouse, releaseMouse, moveBlockMouse, drag } from '../modules/controls.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader')
    }
    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');
        //this.load.image('logo_gamma');
        this.load.image(['logo_gamma', 'cubix', 'cubix_fondo', 'drop']);

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        this.logo = this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo_gamma').setInteractive();
        this.cubix = this.add.image(50, 100, 'cubix').setInteractive();
        this.input.setDraggable(this.cubix); //permite arrastrarlo
        this.cubix_fondo = this.add.image(50, 200, 'cubix_fondo').setInteractive();

        this.drop = this.add.image(250, 250, 'drop').setDepth(-1).setInteractive();


        //this.logo.flipX = true; // Lo voltea en X 
        //this.logo.setVisible(0) // Lo vuelve invisible
        //this.logo.setDepth(1) // Le da una profundidad. Permite que hayan imágenes sobre otras imágenes

        /*
        this.teclaA = this.input.keyboard.addKey(keyCodes.A);
        this.teclaA.on('down', () =>{
            console.log("Has presionado la tecla A");
        });
        this.teclaA.on('up', () => {
            console.log("Has soltado la tecla A");
        });
        */

        this.keys = this.input.keyboard.addKeys(keymap);
        /*
        this.teclas.arriba.on('down', () => {
            setTint(this.logo, 0xff0000);
            console.log("Se ha presionado ARRIBA");
        });
        this.teclas.abajo.on('down', () => {
            console.log("Se ha presionado ABAJO");
            setTint(this.logo, 0xffffff);
        });
        */

        /*
        this.input.keyboard.createCombo([keymap.arriba, keymap.abajo, keymap.izquierda, keymap.derecha], { resetOnMatch: true })
        this.input.keyboard.on('keycombomatch', () => {
            console.log("El combo dominicano.")
        });
        */


        //this.cursor = this.input.keyboard.createCursorKeys(); //Crear unos controles básicos predefinidos.

        moveBlockMouse(this.input, this.cubix_fondo);

    }
    
    update() {
        const EVENT = Phaser.Input.Events;
        //move(this.keys, this.cubix);
        //color(this.keys, this.cubix);
        //mouse(this.input, this.cubix_fondo);
        //greenClick(this.input);
        //blueOver(this.input);
        //blockMouse(this.input);
        //releaseMouse(this.input, this.keys);
        //this.logo.angle++; //hace que el logo de vueltas
        //this.logo.rotation++;
        //move(this.cursor, this.logo);
        //move(this.cursor, this.cubix);
        drag(this.input, this.drop);
    }

}
export default Bootloader;