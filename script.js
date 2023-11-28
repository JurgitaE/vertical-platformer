import Game from './classes/Game.js';

window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 576;

    const game = new Game(canvas);

    function animate() {
        // ctx.fillStyle = 'white';
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        game.render(ctx);
        window.requestAnimationFrame(animate);
    }

    animate();
});
