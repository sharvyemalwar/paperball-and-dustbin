
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball;
var zone,zone2,zone3;
var ground;
function preload()
{
	//ballImg=loadImage("ball.png")	
}

function setup() {
    createCanvas(1200, 500);
	//createCanvas(1200, 400);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);

	//ballSprite=createSprite(800, 45, 10,10);
	//ballSprite.addImage(ballImg)
	//packageSprite.scale=0.2
	
	ball = new Paper(200,450,40);
	//Paper(400,400);
	zone=createSprite(920,480,200,20);
	zone.shapeColor=color(0,255,0)

	zone2=createSprite(1010,430,20,100);
	zone2.shapeColor=color(0,255,0)

	zone3=createSprite(830,430,20,100);
	zone3.shapeColor=color(0,255,0)

	ground=createSprite(10,500,2400,20);
	ground.shapeColor=color("yellow")
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
   ball.display();
   //ball.collide(ground);
  //keyPressed();
  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
	}
}


