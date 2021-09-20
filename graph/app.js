const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const equationDisplay = document.getElementById('equation')
const WIDTH = 512
const HEIGHT = 512

var step = 0.25
var zoom = 100
var depth = 2048

var a = 1
var b = 0
var c = 0


//generate values
function generateValues() {
    values = []
    x = -depth * step
    for (let i = -depth; i < depth; i++) {
        x += step

        //equation
        y = Math.pow(a*x, 2) + b*x + c

        values.push([+(x), +(y*-1)]);
        console.log(x, y)
    }
    return values
}

function draw(values) {
    scale = 2
    for (let i = 0; i < values.length - 1; i++) {
        ctx.strokeStyle = "#FF6666";
        ctx.lineWidth = 2
        ctx.beginPath();
        ctx.moveTo(256 + values[i][0] / scale * zoom, values[i][1] / scale * zoom + HEIGHT / 2);
        ctx.lineTo(256 + values[i+1][0] / scale * zoom, values[i+1][1] / scale * zoom + HEIGHT / 2);
        ctx.stroke();
    }
}

function drawGrid(density) {
    for(let i = 0; i < Math.round(density * zoom); i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * (HEIGHT / density) * (zoom / 100));
        ctx.lineTo(WIDTH, i * (HEIGHT / density) * (zoom / 100));
        ctx.stroke();
    }
    for(let i = 0; i < Math.round(density * zoom); i++) {
        ctx.beginPath();
        ctx.moveTo(i * (WIDTH / density) * (zoom / 100), 0);
        ctx.lineTo(i * (WIDTH / density) * (zoom / 100), HEIGHT);
        ctx.stroke();
    }
}

    values = generateValues()
    //drawGrid(16)
    // draw axises
    ctx.lineWidth = 2
    ctx.beginPath();
    ctx.moveTo(0, HEIGHT / 2);
    ctx.lineTo(WIDTH, HEIGHT / 2);
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();

    draw(values)
    equationDisplay.innerText = "y = " + a + "x² + " + b + "x + " + c

    
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //drawGrid(16)

    //draw axises
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2
    ctx.beginPath();
    ctx.moveTo(0, HEIGHT / 2);
    ctx.lineTo(WIDTH, HEIGHT / 2);
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();

    depth = +(document.getElementById('depthInput').value);
    step = +(document.getElementById('stepInput').value);
    zoom = +(document.getElementById('zoomInput').value);

    a = +(document.getElementById('inputA').value);
    b = +(document.getElementById('inputB').value);
    c = +(document.getElementById('inputC').value);

    console.log(values)
    values = generateValues()
    console.log(values)
    equationDisplay.innerText = "y = " + a + "x² + " + b + "x + " + c
    draw(values)
}



