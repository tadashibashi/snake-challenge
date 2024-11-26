import { Grid, Item } from "./Grid";

// ===== Game Variables =======================================================
const grid = new Grid(32, 32); // the grid on which the game takes place
let screenWidth: number;       // logical pixel width of the canvas
let screenHeight: number;      // logical pixel height of the canvas

let moveInterval = 0.4;        // time interval of snake movement (seconds)
let moveTimer = moveInterval;  // current countdown of move timer (seconds)

// Track player input
let left = false;
let right = false;
let up = false;
let down = false;

// Setup keyboard input events
window.addEventListener("keydown", evt => {
    switch(evt.key) {
        case "ArrowLeft":  left = true; right = false; up = false; down = false;  break;
        case "ArrowRight": right = true; left = false; up = false; down = false;  break;
        case "ArrowUp":    up = true; down = false; left = false; right = false;   break;
        case "ArrowDown":  down = true;  up = false; right = false; left = false; break;
    }
});
window.addEventListener("keyup", evt => {
    switch(evt.key) {
        case "ArrowLeft":  left = false;  break;
        case "ArrowRight": right = false; break;
        case "ArrowUp":    up = false;    break;
        case "ArrowDown":  down = false;  break;
    }
});

// ===== Game Events ==========================================================
/**
 * Called right before the game's first update frame starts
 */
export function initialize(canvas: HTMLCanvasElement) {
    // Get the canvas logical pixel size
    screenWidth = canvas.width;
    screenHeight = canvas.height;
}

/**
 * Called 60 times per second while the game is running.
 * Implement game logic here.
 * @param deltaTime time elapsed since last frame, in seconds (~.0167 seconds)
 * @param totalTime time elapsed since the game started, in seconds
 */
export function update(deltaTime: number, totalTime: number) {
    // Process input
    if (left) {
        // Player is pressing left

    } else if (right) {
        // Player is pressing right

    } else if (up) {
        // Player is pressing up

    } else if (down) {
        // Player is pressing down

    }

    // Update movement timer
    moveTimer -= deltaTime;

    // "Move" event triggered here when movement timer reaches 0.
    // Adjust the moveTimerMax to change the snake's movement speed.
    if (moveTimer <= 0)
    {
        // Please change this code (it's just putting random items on the grid)
        for (let row = 0; row < grid.height; ++row) {
            for (let column = 0; column < grid.width; ++column) {
                grid.set(column, row, Math.floor(Math.random() * 3) as Item);
            }
        }
    }

    // Reset move counter after triggered
    while (moveTimer <= 0)
        moveTimer += moveInterval;

    // It may be good to clear the grid and then fill in the positions of the
    // snake and fruit every frame.
    // grid.clear();
}

/**
 * Called after update, draw the game to the canvas here
 * @param context  canvas rendering context by which to draw stuff
 */
export function render(context: CanvasRenderingContext2D) {
    const rectWidth = screenWidth / grid.width;
    const rectHeight = screenHeight / grid.height;

    context.clearRect(0, 0, screenWidth, screenHeight);

    // Draw the game items according to the grid.
    // Please feel free to change this for fun, right now it just draws colored squares
    for (let row = 0; row < grid.height; ++row) {
        for (let column = 0; column < grid.width; ++column) {
            switch(grid.get(column, row)) {
                case Item.None:  context.fillStyle = "black"; break;
                case Item.Snake: context.fillStyle = "green"; break;
                case Item.Fruit: context.fillStyle = "orange"; break;
            }
            context.fillRect(column * rectWidth, row * rectHeight, rectWidth, rectHeight);
        }
    }
}
