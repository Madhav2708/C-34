const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine;
var world;

function setup(){

    createCanvas(1000,800);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(500,750,1000,20);
    box1=new Box(900,100,70,70);
    box2=new Box(900,200,70,70);
    box3=new Box(900,300,70,70);
    box4=new Box(900,400,70,70);
    box5=new Box(900,500,70,70);
    ball=new Ball(200,200,50,50);
    rope=new Rope(ball.body, {x:700,y:300});


}

function draw(){

    background("white");
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ball.display();
    rope.display();


}


