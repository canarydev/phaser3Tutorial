/* Movimiento básico */
/*

Para ver qué parámetros se pueden modificar haremos un console.log(gameObject); iremos a prototype y veremos los parámetros que se pueden modificar.

Ayuda: https://photonstorm.github.io/phaser3-docs/Phaser.Types.GameObjects.html
*/


class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Movement_V1')
    }
    preload() {
        this.load.setPath('./assets/');
        this.load.image('cubix');

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        this.keys = this.input.keyboard.addKeys(Phaser.Input.Keyboard.KeyCodes);
        this.cubix = this.add.image(50, 100, 'cubix');
    }
    
    update() {
        if (this.keys.UP.isDown) {
            this.cubix.y -= 1;
        }
        if (this.keys.DOWN.isDown) {
            this.cubix.y += 1;
        }
        if (this.keys.RIGHT.isDown) {
            this.cubix.x += 1;
            this.cubix.flipX = false;
        }
        if (this.keys.LEFT.isDown) {
            this.cubix.x -= 1;
            this.cubix.flipX = true;
        }
    }

}
export default Bootloader;