//import Bootloader from './Scenes/Movement_V1.js';
//import Bootloader from './Scenes/Movement_V2.js';
//import Bootloader from './Scenes/Movement_V3.js';
import Bootloader from './Scenes/Colors.js';
//import Bootloader from './Scenes/Bootloader.js';
//import Bootloader from './Scenes/AnimationsWithAtlas.js';
//import Bootloader from './Scenes/Tweens.js';
//import Bootloader from './Scenes/Timelines.js';
//import Bootloader from './Scenes/StaticTexts_V1.js';
//import Bootloader from './Scenes/StaticTexts_V2.js';
//import Bootloader from './Scenes/StaticTexts_V3.js';

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