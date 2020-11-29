const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground;
var sheet1,sheet2,sheet3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,360,40)

	ground=new Ground(400,380,800,10);

	
	sheet2=new Metal(635,272,100,100);
	sheet3=new Metal(720,272,10,100);

	Engine.run(engine);

	paper1.debug=true;

  
}


function draw() {
  rectMode(CENTER);
  background("grey");


  paper1.display();

  ground.display();

 
  sheet3.display();
  sheet2.display();
 

  keypressed();



  
drawSprites()
 
}
function keypressed(){
	if(keyCode === UP_ARROW ){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-6});
	}

	
	
}


