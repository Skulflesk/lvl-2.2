
function GameObject()
{
    this.x = 20;
    this.y = 20;
    this.width = 30;
    this.height = 100;
    this.radius = 30;
    this.color = "red";

    this.drawCircle = function()
    {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 360 * Math.PI / 180, true);
        context.fillStyle = this.color;
        context.fill();
    }

    this.drawRect = function()
    {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
