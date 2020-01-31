//import Bootloader from './Scenes/Bootloader.js';
//import Bootloader from './Scenes/AnimationsWithAtlas.js';
//import Bootloader from './Scenes/Tweens.js';
//import Bootloader from './Scenes/Timelines.js';
import Bootloader from './Scenes/StaticText.js';

const config = {
    title: "prueba",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 300,
        height: 300,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#22a6b3",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [
        Bootloader
    ],
    banner: {
        hidePhaser: true,
        text: '#FFF00F'
    },
    zoom: 1
};

new Phaser.Game(config);