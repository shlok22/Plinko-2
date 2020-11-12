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


   for (var c = 0; c <=width; c = c + 80) {
     divisions.push(new Divisions(c, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var d = 75; d <=width; d=d+50) 
    {
    
       plinkos.push(new Plinko(d,75));
    }

    for (var d = 50; d <=width-10; d=d+50) 
    {
    
       plinkos.push(new Plinko(d,175));
    }

     for (var d = 75; d <=width; d=d+50) 
    {
    
       plinkos.push(new Plinko(d,275));
    }

     for (var d = 50; d <=width-10; d=d+50) 
    {
    
       plinkos.push(new Plinko(d,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var d = 0; d < particles.length; d++) {
   
     particles[d].display();
   }
   for (var c = 0; c < divisions.length; c++) {
     
     divisions[c].display();
   }
}