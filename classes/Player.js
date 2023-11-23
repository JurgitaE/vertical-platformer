class Player {
    constructor(game, xPosition, yPosition) {
        this.game = game;
        this.position = {
            x: xPosition,
            y: yPosition,
        };
        this.velocity = {
            x: 0,
            y: 1,
        };
        this.width = 100;
        this.height = 100;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(ctx) {
        this.draw(ctx);
        if (this.position.y + this.height < this.game.height) {
            this.position.y += this.velocity.y;
            this.velocity.y += 0.5;
        }
    }
}

export default Player;
