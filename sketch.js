var hr , min, sec;
var secAngle,hrAngle,minAngle;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  
}

function draw() {
  background("black");
 
  translate(200,200);
 rotate(-90);

 hr=hour();
 min=minute();
 sec=second();

secAngle = map(sec,0,60,0,360);
hrAngle = map(hr%12,0,12,0,360);
minAngle = map(min,0,60,0,360);

push();
rotate(secAngle);
stroke("pink");
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(minAngle);
stroke("blue");
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(hrAngle);
stroke("green");
strokeWeight(7);
line(0,0,50,0);
pop();


stroke("yellow");
point(0,0);
strokeWeight(8);
noFill();
//secHand stroke
stroke(255,0,0);
arc(0,0,300,300,0,secAngle);

//minHand stroke
stroke(0,255,0);
arc(0,0,280,280,0,minAngle);

//hr Hand stroke
stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);


  drawSprites();
}