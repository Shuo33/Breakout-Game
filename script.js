const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');

// bring in the canvas element
const canvas = document.getElementById('canvas');
// create/render the context to the DOM 
const ctx = canvas.getContext('2d'); 

// initialize the score 
let score = 0; 

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

// Draw everything
function draw() {
    drawBall();
    drawPaddle();
    drawScore();
}

draw();





// Show & close the rules
rulesBtn.addEventListener('click', () =>
    rules.classList.add('show'));

closeBtn.addEventListener('click', () =>
    rules.classList.remove('show'));

