const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, stone, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(500, 50, 50);
    stone = new Stone(700, 50, 80, 80);
    iron = new Iron(400, 50, 60, 30, )

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    iron.display();
    stone.display();
    rubber.display();
    plane.display();
    hammer.display();

    
 
}