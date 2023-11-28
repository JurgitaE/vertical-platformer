import Game from './classes/Game.js';
import Sprite from './classes/Sprite.js';

window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 576;
    const scaledCanvas = {
        with: canvas.width / 4,
        height: canvas.height / 4,
    };

    const game = new Game(canvas);
    const background = new Sprite(0, 0, './img/background.png');

    function animate() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.scale(4, 4);
        ctx.translate(0, -background.image.height + scaledCanvas.height);
        background.update(ctx);
        ctx.restore();

        game.render(ctx);
        window.requestAnimationFrame(animate);
    }

    animate();
});
