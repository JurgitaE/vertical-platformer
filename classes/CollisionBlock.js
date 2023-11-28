class CollisionBlock {
    constructor(positionX, positionY) {
        this.position = {
            x: positionX,
            y: positionY,
        };
        this.width = 16;
        this.height = 16;
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(ctx) {
        this.draw(ctx);
    }
}

export default CollisionBlock;
