import { keymap } from '../modules/keys.js'
import { } from '../modules/controls.js'

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';

        this.load.spritesheet('tomato', 'tomato.png', {
            frameWidth: 16,
            frameHeight: 25
        });

        /* Cómo cargar un sprite que tiene espacios entre sprites */
        this.load.spritesheet('tomato_spacing', 'tomato_spacing.png', {
            frameWidth: 16,
            frameHeight: 25,
            margin: 1,
            spacing: 2
        });
    }
    
    create() {
        this.tomato = this.add.sprite(100, 100, 'tomato', 0);
        this.tomato_spacing = this.add.sprite(100, 130, 'tomato_spacing', 0);
    }
    update(time, delta) {
       
    }
}

export default Bootloader;