var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var player1 = {
    x: 20,
    y: 20,
    width: 150,
    height: 100,
    speed: 5
};

var x = 500;
var y = 250;
var radius = 30;
var xSpeed = 5;
var ySpeed = 5;
var ballColor = "black";

function drawGame()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw rectangle
    context.fillStyle = "#FF0000";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    // Draw ball
    context.beginPath();
    context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);
    context.fillStyle = ballColor;
    context.fill();

    // Move ball
    x = x + xSpeed;
    y = y + ySpeed;

    // Right wall
    if (x + radius >= canvas.width)
    {
        x = canvas.width - radius;
        xSpeed = -xSpeed * 1.01;
        ballColor = "blue";
    }

    // Left wall
    if (x - radius <= 0)
    {
        x = radius;
        xSpeed = -xSpeed * 1.01;
        ballColor = "red";
    }

    // Bottom wall
    if (y + radius >= canvas.height)
    {
        y = canvas.height - radius;
        ySpeed = -ySpeed * 1.01;
        ballColor = "yellow";
    }

    // Top wall
    if (y - radius <= 0)
    {
        y = radius;
        ySpeed = -ySpeed * 1.01;
        ballColor = "green";
    }

    requestAnimationFrame(drawGame);
}

document.addEventListener("keydown", function(event)
{
    if (event.key == "ArrowUp")
    {
        player1.y -= player1.speed;
    }

    if (event.key == "ArrowDown")
    {
        player1.y += player1.speed;
    }

    if (event.key == "ArrowLeft")
    {
        player1.x -= player1.speed;
    }

    if (event.key == "ArrowRight")
    {
        player1.x += player1.speed;
    }
});

drawGame();