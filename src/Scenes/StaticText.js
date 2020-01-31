/* T E X T O S  E S T Á T I C O S */
/*

Ayuda: 
*/

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Timelines');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix', 'cubix_fondo']);
    }

    create() {

    }

    update(time, delta) {

    }
}

export default Bootloader;