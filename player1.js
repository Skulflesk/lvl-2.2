var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");




function drawPlayer1()
{
    // context.clearRect(0, 0, canvas.width, canvas.height);

    // context.beginPath();
    // context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);

// context.beginPath();
context.fillStyle = "#FF0000"; 
context.fillRect(20, 20, 150, 100);
x = 200;
y = 200;
    
    

    
//    x = x + xSpeed;
//    y = y + ySpeed;
   
}
setInterval(drawPlayer1, 20);
