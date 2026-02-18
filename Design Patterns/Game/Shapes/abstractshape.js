export class abstractShape {
    constructor(movement) {
        this.movement = movement;
    }
    update(deltatime) {
        this.movement.update(deltatime);
    }
}
