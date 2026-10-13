var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var player1 = {
    x: 20,
    y: 20,
    width: 150,
    height: 100,
    speed: 5
};

function drawPlayer1()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#FF0000";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    requestAnimationFrame(drawPlayer1);
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

drawPlayer1();
