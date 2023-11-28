class Player {
    constructor(game, positionX, positionY) {
        this.game = game;
        this.position = {
            x: positionX,
            y: positionY,
        };
        this.velocity = {
            x: 0,
            y: 1,
        };
        this.width = 100;
        this.height = 100;
        this.movmentSpeed = 5;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(ctx) {
        this.velocity.x = 0;

        if (this.game.keys.includes('d') || this.game.keys.includes('ArrowRight')) {
            this.velocity.x = this.movmentSpeed;
        } else if (this.game.keys.includes('a') || this.game.keys.includes('ArrowLeft')) {
            this.velocity.x = -this.movmentSpeed;
        }

        this.draw(ctx);
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y < this.game.height) {
            this.velocity.y += this.game.gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}

export default Player;
