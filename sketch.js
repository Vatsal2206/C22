//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  };

  //Matter.Bodies.rectangle(x, y, width, height, [options])
  ground = Bodies.rectangle(200,380,400,20,options);

  //Matter.World.add(world, object)
  World.add(world, ground);

  ball = Bodies.circle(200,100,20, {restitution: 1});
  World.add(world, ball);
  //console.log(object);
  //console.log(object.position.x);
  //console.log(object.position.y);
}

function draw() {
  background("black");  

  Engine.update(engine);
  
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x, ground.position.y, 400, 40);

  fill("cyan");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  
}