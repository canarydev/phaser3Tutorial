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
    }

    create() {
        this.tomato = this.add.sprite(100, 100, 'tomato', 0);
        
    }
    update(time, delta) {
       
    }
}

export default Bootloader;