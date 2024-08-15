const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
const pacSize = 40;
const pacColor = '#FFFF00';
const pacSpeed = 3;
let pacX = canvas.width / 2;
let pacY = canvas.height / 2;
let pacDX = pacSpeed;
let pacDY = 0;

// Key event listeners
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            pacDX = 0;
            pacDY = -pacSpeed;
            break;
        case 'ArrowDown':
            pacDX = 0;
            pacDY = pacSpeed;
            break;
        case 'ArrowLeft':
            pacDX = -pacSpeed;
            pacDY = 0;
            break;
        case 'ArrowRight':
            pacDX = pacSpeed;
            pacDY = 0;
            break;
    }
});

// Draw Pac-Man
function drawPacMan() {
    ctx.beginPath();
    ctx.arc(pacX, pacY, pacSize / 2, 0.2 * Math.PI, 1.8 * Math.PI); // Draw Pac-Man shape
    ctx.lineTo(pacX, pacY);
    ctx.fillStyle = pacColor;
    ctx.fill();
    ctx.closePath();
}

// Update game state
function update() {
    pacX += pacDX;
    pacY += pacDY;

    // Boundary collision detection
    if (pacX < pacSize / 2) pacX = pacSize / 2;
    if (pacX > canvas.width - pacSize / 2) pacX = canvas.width - pacSize / 2;
    if (pacY < pacSize / 2) pacY = pacSize / 2;
    if (pacY > canvas.height - pacSize / 2) pacY = canvas.height - pacSize / 2;
}

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    update();
    drawPacMan();
    requestAnimationFrame(gameLoop); // Continue game loop
}

// Start game loop
gameLoop();
