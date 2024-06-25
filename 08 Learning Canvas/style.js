const canvas = document.getElementById("draw");

const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



// function draw() {
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 3; j++) {
//             ctx.beginPath();

//             let x = 25 + j * 50;
//             let y = 25 + i * 50;
//             let radius = 20;
//             let startAngle = 0;
//             let endAngle = Math.PI + (Math.PI * j) / 2;

//             const counterclockwise = i % 2 !== 0;

//             ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)

//             if (i > 1) {
//                 ctx.fill()
//             } else {
//                 ctx.stroke()
//             }
//         }
//     }
// }
// draw()


function draw() {


    // Quadratic curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();

}
draw()