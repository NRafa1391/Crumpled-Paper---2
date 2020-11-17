
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(120, 540, 20);
	ground = new Ground(400, 350, 800, 10);
	dustbin = new Dustbin(600, 590);
	dustbin2 = new Dustbin2(705, 545);
	dustbin3 = new Dustbin3(500, 545);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin2.display();
  dustbin.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:45, y:-85})
	}

}



