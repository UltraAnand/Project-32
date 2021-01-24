const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var allBoxes = [];

var ss;
var score = 0
//var  backgroundImg  
//var backgroundImg2
//var bgColor = color('rgb(191,239,255)');
var bgColor = "black"

function preload() {
  changeBackground();
}

function setup() {
  var canvas = createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(320, 340, 320, 20)
  ground2 = new Ground(650, 200, 250, 20)
  for (var i = 0; i < 7; i++) {
    allBoxes.push(new Box(200 + i * 40, 300, "cyan"))
  }
  for (var i = 0; i < 5; i++) {
    allBoxes.push(new Box(240 + i * 40, 250, "blue"))
  }
  for (var i = 0; i < 3; i++) {
    allBoxes.push(new Box(280 + i * 40, 200, "pink"))
  }
  for (var i = 0; i < 1; i++) {
    allBoxes.push(new Box(320 + i * 40, 150, "white"))
  }

  for (var i = 0; i < 5; i++) {
    allBoxes.push(new Box(575 + i * 40, 170, "blue"))
  }
  for (var i = 0; i < 3; i++) {
    allBoxes.push(new Box(615 + i * 40, 120, "pink"))
  }
  for (var i = 0; i < 1; i++) {
    allBoxes.push(new Box(655 + i * 40, 70, "white"))
  }

  //polygon = Bodies.circle(1100,250,20, {density:3.5});
  polygon = new Ball(1100, 250, 20);
  //World.add(world, polygon);

  ss = new SlingShot(polygon.body, {
    x: 1000,
    y: 250
  })


}

function draw() {

  background(bgColor);
  Engine.update(engine);
  ground1.display();
  ground2.display();
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].score();
    allBoxes[i].display();
  };

  ss.display();
  polygon.display();


  textSize(32)
  noStroke();
  text("Score:" + score, 1000, 40)




}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {
    x: mouseX,
    y: mouseY
  });
}


function mouseReleased() {
  ss.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    ss.ballBack(polygon.body);
  }
}
async function changeBackground() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var hi = await response.json();

  var dateTime = hi.datetime
  //var dateTime = "2021-01-24T06:01:42.309797+05:30"
  console.log(dateTime)
  var r = dateTime.slice(11, 13)
  console.log(r)
  if (r >= 06 && r <= 19) {
    console.log("day....");
    // bgColor = color('rgb(191,239,255)');
    bgColor = "Azure";
  } else {
    //bgColor = color('rgb(255,255,255)');
    bgColor = "black";
    console.log("night........");
  }

}