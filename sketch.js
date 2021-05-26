
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject,handObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,animal,bird;


function preload(){
	boy=loadImage("images/boy.png");
  animal=loadImage("images/Animal.png");
  bird=loadImage("images/bird.png");
  bird2=loadImage("images/bird2.png");
  fence=loadImage("images/fence.png");

  }

function setup() {
	createCanvas(1350, 750);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(200,400,30); 
	mango1=new mango(1100,300,23);
  mango2=new mango(1170,330,20);
	mango3=new mango(1010,340,25);
	mango4=new mango(950,280,20);
	mango5=new mango(1100,270,25);
	mango6=new mango(1000,230,20);
	mango7=new mango(1300,300,25);
	mango8=new mango(1150,150,20);
	mango9=new mango(1100,230,25);
	mango10=new mango(1250,250,20);
	mango11=new mango(1170,260,20);
	mango12=new mango(1050,175,25);

	treeObj=new tree(1100,700);
	groundObject=new ground(width/2,700,width,20);
  handObject=new ground(width/2,525,width,3);
  Engine.run(engine)
  //reader.run(reader)
}

function draw() {

  background("white");
  textSize(28);
  text("Press (☞ﾟヮﾟ)☞Space☜(ﾟヮﾟ☜) to get a second Chance to Play!!",50 ,50);
  textSize(30);
  text("😻OMG 🥭Mangos🥭 I LOVE THAT !!!",200 ,350);
  textSize(20);
  text("🌰🌰I'm going to eat 🌰🌰",880 ,100);
  image(boy ,180,400,220,300);
  image(animal ,1050,110,50,50);
  image(bird ,1141,450,90,90);
  image(bird2 ,905,190,90,90);
  image(fence ,1,535,1200,160);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();
  groundObject.display();
  handObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }