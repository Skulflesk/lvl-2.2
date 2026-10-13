
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var player1 = new GameObject();

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.drawRect();
}

setInterval(animate, 20);
