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
        this.anims.create({
            key: "tomato_walk",
            frames: this.anims.generateFrameNumbers('tomato', {
                start: 0,
                end: 7
                //También se pueden elegir los frames así:
                //frames: [0, 1, 2, 3, 4, 5, 6, 7]
            }),
            repeat: -1, //repetición infinita
            frameRate: 15 //frames por segundo
        });
        this.tomato.anims.play("tomato_walk");
        //También se puede animar usando esta expresión:
        //this.anims.play("tomato_walk", this.tomato);
    }
    update(time, delta) {
       
    }
}

export default Bootloader;