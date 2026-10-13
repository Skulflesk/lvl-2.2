var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = 500;
var y = 250;
var radius = 30;
var xSpeed = 5;
var ySpeed = 5;
var ballColor = "black";

function drawBall()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);

    

    context.fillStyle = ballColor;
    context.fill();

    
   x = x + xSpeed;
   y = y + ySpeed;
   
    
  
    if (x + radius >= canvas.width)
    {
        x = canvas.width - radius;
      xSpeed = -xSpeed
      xSpeed = xSpeed* 1.01;
      ballColor = "blue";
    }
    if (x - radius <= 0)
    {
       x = radius;
        xSpeed = -xSpeed
         xSpeed = xSpeed* 1.01;
        ballColor = "red";
    }
      if (y + radius >= canvas.height)
    {
        y = canvas.height - radius;
      ySpeed = -ySpeed
      ySpeed = ySpeed * 1.01;
      ballColor = "yellow";
    }
    if (y - radius <= 0)
    {
       y = radius;
        ySpeed = -ySpeed
        ySpeed = ySpeed * 1.01;
        ballColor = "green";
    }

}

setInterval(drawBall, 20);