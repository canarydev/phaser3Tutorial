import { } from './utilities.js'
/* Movimiento */

export function move(keymap, player) {
    if (keymap.up.isDown) {
        player.y -= 1;
        console.log('arriba');
    }
    if (keymap.down.isDown) {
        player.y += 1;
    }
    if (keymap.right.isDown) {
        player.x += 1;
        player.flipX = false;
    }
    if (keymap.left.isDown) {
        player.x -= 1;
        player.flipX = true;
    }
}

/* Cambiar color al pulsar */
export function colorRed(keymap, player) {
    if (keymap.space.isDown) {
        player.setTint(0xff0000);
        console.log("Se ha aplicado un tinte.");
    }
    else player.clearTint();;
}


const EVENT = Phaser.Input.Events;
console.log("EVENT ", EVENT);

export function mouse(input, object) {
    
    input.on(EVENT.POINTER_DOWN, (event) => {
        console.log("Se ha clickado.");
    });
    
    input.on(EVENT.POINTER_UP, (event) => {
        console.log("Se ha dejado de clickar.");
    });

     input.on(EVENT.POINTER_MOVE, (event) => {
         if (event.isDown) {
             object.x = event.worldX;
             object.y = event.worldY;
         }
     });

     input.on(EVENT.GAME_OVER, (event) => {
         console.log("Has entrado en el lienzo.");
     });

     input.on(EVENT.GAME_OUT, (event) => {
         console.log("Has salido del lienzo.");
     });

     input.on(EVENT.POINTER_DOWN_OUTSIDE, (event) => {
         console.log("Has clickado fuera del lienzo.");
     });

     input.on(EVENT.POINTER_UP_OUTSIDE, (event) => {
         console.log("Has dejado de clickar fuera del lienzo.");
     });

}
export function greenClick(input) {
    input.on(EVENT.GAMEOBJECT_DOWN, (pointer, gameObject) => {
        gameObject.setTint(0x00ff00);
        //console.log("Has hecho click a un GO")
    });
    input.on(EVENT.GAMEOBJECT_UP, (pointer, gameObject) => {
        gameObject.clearTint();
        //console.log("Has hecho click a un GO")
    });
    
}
export function blueOver(input) {
    input.on(EVENT.GAMEOBJECT_OVER, (pointer, gameObject) =>{
        gameObject.setTint(0x0000ff);
    });
    input.on(EVENT.GAMEOBJECT_OUT, (pointer, gameObject) =>{
        gameObject.clearTint();
    });
    
}
export function blockMouse(input) {
    input.on(EVENT.POINTER_DOWN, () => {
        input.mouse.requestPointerLock(); //Bloquea el ratón
    });
    
}

export function releaseMouse(input, keymap) {
    if (keymap.a.isDown) {
        input.mouse.releasePointerLock();
    }
}

export function moveBlockMouse(input, object) {
    input.on(EVENT.POINTER_MOVE, (pointer) => {
        if (input.mouse.locked) {
            try{
                object.x += pointer.movementX;
                object.y += pointer.movementY;
            }
            catch(TypeError){}
        }
    });
}

export function drag(input, drop) {
    drop.input.dropZone = true; 
    input.on(EVENT.DRAG_START, (pointer, obj, dragX, dragY) => {
        obj.setScale(.75);
    });
    input.on(EVENT.DRAG, (pointer, obj, dragX, dragY) => {
        obj.x = dragX;
        obj.y = dragY;
    });
    input.on(EVENT.DRAG_END, (pointer, obj, dropzone) => {
        if (!dropzone){
            obj.x = obj.input.dragStartX;
            obj.y = obj.input.dragStartY;
        }
        else{
            //obj.x = drop.x;
            //obj.y = drop.y;
        }
        obj.setScale(1);
    });
    input.on(EVENT.DROP, (pointer, obj, dropzone) => {
        obj.x = dropzone.x;
        obj.y = dropzone.y;
    });

    input.on(EVENT.DRAG_ENTER, (pointer, obj, dropzone) => {
        dropzone.setTint(0x08000);
    });
    input.on(EVENT.DRAG_LEAVE, (pointer, obj, dropzone) => {
        dropzone.clearTint();
    });
}