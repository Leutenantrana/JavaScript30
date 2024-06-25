const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;
ctx.globalCompositeOperation = 'screen';


let isDrawing = false;
let lastX = 0;
let lastY = 0
let hue = 0;
let direction = true;
let color = ["red", "orange", "pink", "yellow", "blue", "black"]

function randomColor(color) {
    let random = getRandomInt(0, color.length);
    ctx.strokeStyle = color[random]
}

// getting a random int
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// changing lastX and lastY

// setInterval(() => {
//     lastX = getRandomInt(0, window.innerWidth)
//     lastY = getRandomInt(0, window.innerHeight)
//     randomColor(color)

// }, 1000)

function draw(e) {
    if (!isDrawing) {
        return;
    }


    ctx.beginPath();
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50% )`

    lastX = e.offsetX;
    lastY = e.offsetY

    if (hue > 360) {
        hue = 0;
    }
    hue++;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }




}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)