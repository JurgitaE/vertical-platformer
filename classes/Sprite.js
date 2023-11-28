class Sprite {
    constructor(positionX, positionY, imgSrc) {
        this.position = {
            x: positionX,
            y: positionY,
        };
        this.image = new Image();
        this.image.src = imgSrc;
    }
    draw(ctx) {
        if (!this.image) return;
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }

    update(ctx) {
        this.draw(ctx);
    }
}
export default Sprite;
