# Snake Challenge

## Get Started
```bash
npm install
npm run dev
```

Then, open a browser at the localhost port number logged in the terminal.

## Instructions

Recreate the classic arcade game Snake in the file `src/snake.ts`

Your main task is to implement the `update` function, although you may modify anything
else in that file.

You may abstract the logic out into helper classes / functions for better organization.

### Requirements
Initialization
- The snake starts out as one grid square in size.

Snake Movement
- The snake moves in a direction controlled by the arrow keys
- Movement occurs at a regular time interval
- The snake "jumps" from one grid square to the next (smooth animation is not required)
- When the snake reaches the edges of the canvas, it should wrap around to the opposite side.

Fruit
- A fruit square should appear at random, at an unoccupied position on the grid at the start of the game.
- As the snake eats the fruit:
    - The snake grows one square in size.
    - The fruit is moved to another random, unoccupied square.

Snake Growth
- The snake must remain a contiguous line of squares (connected horizontally or vertically) contiguous spaces on the grid
- The head dictates the motion, the body follows.

Gameover
- The game ends when the snake collides with itself

### Bonus (Optional)
- Reset the game state on game over to play again
- Display the score on-screen, keep track of high score
- Increase the snake's speed as the score increases
- Adjust the visuals in the `render` function
