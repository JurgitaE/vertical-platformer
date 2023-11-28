import Player from './Player.js';
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this, 0, 0);
        this.gravity = 0.5;
        this.keys = [];
        this.canJump = true;

        window.addEventListener('keydown', e => {
            !this.keys.includes(e.key) && this.keys.push(e.key);

            if (e.key === ' ' && this.canJump) {
                this.player.velocity.y = -10;
                this.canJump = false;
            }
        });
        window.addEventListener('keyup', e => {
            const index = this.keys.indexOf(e.key);
            index > -1 && this.keys.splice(index, 1);
            this.canJump = true;
        });
    }
    render(ctx) {
        this.player.update(ctx);
    }
}

export default Game;
