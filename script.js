const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');

// bring in the canvas element
const canvas = document.getElementById('canvas');
// create/render the context to the DOM 
const ctx = canvas.getContext('2d'); 

// initialize the score 
let score = 0; 

// initialize brick row and brick column
// const brickRowCount = 9; 
// const brickColumnCount = 5;
const brickRowCount = 5; 
const brickColumnCount = 9;


// Create ball properties  
const ball = {
    // start right in the middle, with x & y as the starting point
    x: canvas.width / 2, 
    y: canvas.height / 2, 

    // radius of the ball 
    size: 10, 

    // animation: the speed of the direction on x and y axe
    speed: 4, 
    // 4px on the x direction, positive => left
    dx: 4, 
    // 4px on the y direction, negative => up 
    dy: -4
}

// Draw ball on canvas with path 
function drawBall() {
    // start the path
    ctx.beginPath(); 
    // arc(x, y, radius, startAngle, endAngle), Math.PI = 180° => Math.PI * 2 = 360° = a circle) 
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2); 
    // give the path color 
    ctx.fillStyle = '#0095dd'; 
    // fill the path
    ctx.fill();
    // close the path
    ctx.closePath();
}


//Create paddle properties
const paddle = {
    //start point x
    x: canvas.width / 2 - 40, 
    //start point y
    y: canvas.height - 20, 
    // width of the paddle
    w: 80, 
    // height of the paddle 
    h: 10, 
    speed: 8, 
    // the paddle's going to move only in it's x-axis 
    dx: 0
}

// Draw paddle on cavas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

//Draw score on canvas
function drawScore() {
    ctx.font = '20px Arial'; 

    //fillText(text, start point x, start point y)
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30); 
}

//Properties of each break
const brickInfo = {
    width: 70,
    height: 20, 
    padding: 10, 
    //start point at it's x axis
    offsetX: 45, 
    //start point at it's y axis
    offsetY: 60,
    visible: true, 
}

//Create bricks: creating an array of colums with bricks inside
const bricks = []; 

//loop throught whatever the number of rows is 
// for (let i = 0; i < brickRowCount; i++){
//     //have an array for each row
//     bricks[i] = [];

//     //loop through the colomn count
//     for (let j = 0; j < brickColumnCount; j++){
//         //creat x and y value for each brick
//         const x = i * (brickInfo.width + brickInfo.padding) + brickInfo.offsetX;
//         const y = j * (brickInfo.height + brickInfo.padding) + brickInfo.offsetY;
        
//         //give us an array of the column with the bricks inside: each brick with it's start point at it's x aixs, at it's y aix, and all the propertis in the brickInfo object
//         bricks[i][j] = { x, y, ...brickInfo}; 
//     }
// }

//loop throught whatever the number of column is 
for (let i = 0; i < brickColumnCount; i++){
    //have an array of each column
    bricks[i] = [];

    //loop through the row count
    for (let j = 0; j < brickRowCount; j++){
        const x = i * (brickInfo.width + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.height + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = { x, y, ...brickInfo};
    }
}

console.log(bricks);

//Draw bricks on canvas 
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.width, brick.height);
            ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
            ctx.fill();
            ctx.closePath(); 
        })
    })
}


// Draw everything
function draw() {
    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
}

draw();







// Show & close the rules
rulesBtn.addEventListener('click', () =>
    rules.classList.add('show'));

closeBtn.addEventListener('click', () =>
    rules.classList.remove('show'));

