const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//vars
var groundObject,tree,boy,stoneObject;
var treeImage,backImage,boyImage;
var mango1, mongo2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var conection;
 
function preload()
{
	
	backImage = loadImage("bg.png");
	boyImage = loadImage("boy.png");

}

function setup() 
{
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	stoneObject = new Stone(150,600,40);

	mango1 = new Mango(1100,200,44);
	mango2 = new Mango(1300,250,44);
	mango3 = new Mango(1200,200,44);
	mango4 = new Mango(1350,310,44);
	mango5 = new Mango(1000,340,44);
	mango6 = new Mango(900,300,44);
	mango7 = new Mango(900,400,44);
	mango8 = new Mango(1300,400,44);
	mango9 = new Mango(1300,200,44);
	mango10 = new Mango(1200,300,44);

	groundObject = new Ground(750,800,1500,20);

	/*boy = createSprite(300,650);
	boy.addImage(boyImage);
	boy.scale = 0.2;*/
	boy = new Boy(300,650);

	tree = new Tree(1150,450);
	
	conection = new slingshot({x:180,y:550},stoneObject.body);

	Engine.run(engine);
	
}

function draw() 
{
  rectMode(CENTER);
  background(backImage);

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObject.display();
  conection.display();
	groundObject.display();

	boy.display();

	detectCollision ( stoneObject,mango1)
	detectCollision ( stoneObject,mango2)
	detectCollision ( stoneObject,mango3)
	detectCollision ( stoneObject,mango4)
	detectCollision ( stoneObject,mango5)
	detectCollision ( stoneObject,mango6)
	detectCollision ( stoneObject,mango7)
	detectCollision ( stoneObject,mango8)
	detectCollision ( stoneObject,mango9)
	detectCollision ( stoneObject,mango10)
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    conection.fly();
}

function detectCollision (lstone,lmango) {

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if (distance<=lmango.radius+lstone.radius)
		{
			Matter.Body.setStatic(lmango.body,false);
		}



}



