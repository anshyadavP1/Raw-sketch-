let angle = 0;



function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
 
  push();
  translate(50,50);
  rotate(angle);
  fill(255,100,50);
  rect(0,0,500,500);
  pop();
  
  translate(300,300);
  rotate(-angle*1);
  fill(50,100,255);
  rect(0,0,200,200);
  
  angle = angle + 2;

}