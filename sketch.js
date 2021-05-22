const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground, ball;

function setup() {
  createCanvas(400,400);
  myEngine= Engine.create();
  myWorld= myEngine.world;

  var options= {
    isStatic: true
  }

  ground= Bodies.rectangle(200,390,200,20,options);
  World.add(myWorld,ground);
  console.log(ground);
  
  var ball_options= {
    restitution: 1.5
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld, ball);
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  circle(ball.position.x,ball.position.y,40);
}