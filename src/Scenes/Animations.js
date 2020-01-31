class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Animations');
    }
    preload() {
        this.load.path = './assets/';
        
        //utilizaremos esta herramienta para crear los atlas
        //https://gammafp.github.io/atlas-packer-phaser/

        this.load.atlas('tomato', 'tomato.png', 'atlas/tomato_atlas.json')
        this.load.animation('tomatoAnim', 'atlas/tomato_anim.json');
    }

    create() {
        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(3);
        this.tomato.anims.play('tomato_walk');
    }

    update(time, delta) {

    }
}

export default Bootloader;