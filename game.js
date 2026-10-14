
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var player1 = new GameObject();

var ball = new GameObject();
ball.x = 500;
ball.y = 250;
ball.radius = 30;
ball.color = "black";
ball.xSpeed = 5;
ball.ySpeed = 5;

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.drawRect();

    ball.drawCircle();

    ball.x = ball.x + ball.xSpeed;
    ball.y = ball.y + ball.ySpeed;

    if (ball.x + ball.radius >= canvas.width)
    {
        ball.x = canvas.width - ball.radius;
        ball.xSpeed = -ball.xSpeed * 1.01;
        ball.color = "blue";
    }

    if (ball.x - ball.radius <= 0)
    {
        ball.x = ball.radius;
        ball.xSpeed = -ball.xSpeed * 1.01;
        ball.color = "red";
    }

    if (ball.y + ball.radius >= canvas.height)
    {
        ball.y = canvas.height - ball.radius;
        ball.ySpeed = -ball.ySpeed * 1.01;
        ball.color = "yellow";
    }

    if (ball.y - ball.radius <= 0)
    {
        ball.y = ball.radius;
        ball.ySpeed = -ball.ySpeed * 1.01;
        ball.color = "green";
    }
}

document.addEventListener("keydown", function(event)
{
    if (event.key == "w")
    {
        player1.y -= 10;
    }

    if (event.key == "s")
    {
        player1.y += 10;
    }

});

setInterval(animate, 20);
