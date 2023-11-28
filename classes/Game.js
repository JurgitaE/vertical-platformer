import CollisionBlock from './CollisionBlock.js';
import { floorCollisions, platformCollisions } from '../data/collisions.js';
import Player from './Player.js';
import Sprite from './Sprite.js';

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this, 0, 0);
        this.gravity = 0.5;
        this.keys = [];
        this.canJump = true;

        this.background = new Sprite(0, 0, './img/background.png');

        this.scaledCanvas = {
            with: this.canvas.width / 4,
            height: this.canvas.height / 4,
        };

        this.floorCollisions2D = [];
        this.collisionBlocks = [];
        this.platformCollisions2d = [];
        this.collisionPlatforms = [];

        //Floor collision
        for (let i = 0; i < floorCollisions.length; i += 36) {
            this.floorCollisions2D.push(floorCollisions.slice(i, i + 36));
        }
        this.floorCollisions2D.forEach((row, yIndex) => {
            row.forEach((symbol, xIndex) => {
                if (symbol === 202) {
                    this.collisionBlocks.push(
                        new CollisionBlock(
                            xIndex * (this.background.image.width / this.floorCollisions2D[0].length),
                            yIndex * (this.background.image.height / this.floorCollisions2D.length)
                        )
                    );
                }
            });
        });

        //Platform collision
        for (let i = 0; i < platformCollisions.length; i += 36) {
            this.platformCollisions2d.push(platformCollisions.slice(i, i + 36));
        }

        this.platformCollisions2d.forEach((row, yIndex) => {
            row.forEach((symbol, xIndex) => {
                if (symbol === 202) {
                    this.collisionPlatforms.push(
                        new CollisionBlock(
                            xIndex * (this.background.image.width / this.platformCollisions2d[0].length),
                            yIndex * (this.background.image.height / this.platformCollisions2d.length)
                        )
                    );
                }
            });
        });

        window.addEventListener('keydown', e => {
            !this.keys.includes(e.key) && this.keys.push(e.key);

            if (e.key === ' ' && this.canJump) {
                this.player.velocity.y = -20;
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
        ctx.save();
        ctx.scale(4, 4);
        ctx.translate(0, -this.background.image.height + this.scaledCanvas.height);
        this.background.update(ctx);
        this.collisionBlocks.forEach(collisionBlock => collisionBlock.update(ctx));
        this.collisionPlatforms.forEach(collisionPlatform => collisionPlatform.update(ctx));
        ctx.restore();

        this.player.update(ctx);
    }
}

export default Game;
