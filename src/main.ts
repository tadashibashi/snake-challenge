/**
 * Please don't edit this file
 */
import './style.css'
import { initialize, update, render } from "./snake";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <h1>Snake</h1>
        <canvas id="game" width="640" height="640"></canvas>
    </div>
`;

/** Time stamp from last frame */
let lastFrameTime: DOMHighResTimeStamp = 0;
/** Canvas element */
let canvas: HTMLCanvasElement;
/** Canvas context element */
let context: CanvasRenderingContext2D;

/** Game loop */
function loop(timestamp: DOMHighResTimeStamp) {
    requestAnimationFrame(loop);
    update(
        (timestamp - lastFrameTime) * .001,
        timestamp * .001);
    render(context);

    lastFrameTime = timestamp;
}

function main() {
    canvas = document.getElementById("game") as HTMLCanvasElement;
    if ( !canvas ) {
        throw new Error("Failed to get game canvas");
    }

    context = canvas.getContext("2d");

    initialize(canvas);
    requestAnimationFrame(loop);
}

main();
