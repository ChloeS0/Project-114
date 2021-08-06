function setup()
{
canvas=createCanvas(300,300);
  canvas.center();
}

function draw() {
  background(220);
}

function take_snapshot()
{
  save("IMAGE.png");
}