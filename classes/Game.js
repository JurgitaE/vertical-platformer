import Player from './Player.js';
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this, 0, 0);
    }
    render(ctx) {
        this.player.update(ctx);
    }
}

export default Game;
