var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (let k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (let j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (let j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  for (let j = 50; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  for (let j = 50; j <=width - 10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  if(frameCount % 50 === 0){
    particles.push(new Particle(random(20, width - 20), height, 50));
  }
  //display the plinkos 
  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (let k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (let k = 0; k < particles.length; k++) {
    particles[k].display();
  }
}