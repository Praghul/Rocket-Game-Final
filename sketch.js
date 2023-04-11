var space, spaceImg
var rocket, rocketImg
var star, starImg
var asteroid1, asteroid1Img
var asteroid2, asteroid2Img
var asteroid3, asteroid3Img
var gameState = "play"
var score = 0
var asteroid1Group, asteroid2Group
var starGroup

function preload(){
spaceImg = loadImage("Sprite_background_effects_0112.png")
rocketImg = loadAnimation("rocket1.png", "rocket2.png", "rocket3.png", "rocket4.png", "rocket5.png", "rocket6.png", "rocket7.png")
starImg = loadImage("Star.png")
asteroid1Img = loadImage("Asteroid1.png")
asteroid2Img = loadImage("Asteroid2.png")
asteroid3Img = loadImage("Asteroid3.png")
}
function setup() {
createCanvas(windowWidth,windowHeight)
//creating space
/*space = createSprite(0,windowHeight/2 ,2000, 400)
space.addImage("space", spaceImg)*/


//creating Rocket
rocket = createSprite(50,360,50,50)
rocket.addAnimation("rocket", rocketImg)
rocket.scale=1.5

//creating group
starGroup = createGroup()
asteroid1Group = createGroup()
asteroid2Group = createGroup()
}

function draw() {
 background(spaceImg)
 textSize(20)
 stroke("red")
 text("Score :"+score, 30, 250)
 console.log(rocket.y)

 
 
 /*if (space.x < 200) {
    space.x = 310
 }
 space.velocityX = -1*/
 rocket.Y = World.mouseY
  drawSprites();

//Movement of Rocket with Arrows
if (keyDown(LEFT_ARROW)) {
   rocket.x -= 8
}

if (keyDown(RIGHT_ARROW)) {
   rocket.x += 8
}

if (keyDown(UP_ARROW) && rocket.y > 280){
   rocket.y -= 5                                                                                                        
}

if (keyDown(DOWN_ARROW)){
   rocket.y += 5
}
//Switch Statements
if (frameCount% 75 === 0) {
   var rand = Math.round(random(1,3))
   switch(rand) {
      case 1: spawnStars();
      break;
      case 2: spawnasteroid1();
      break;
      case 3: spawnasteroid2();
      default: break;
}

}

if (starGroup.isTouching(rocket)) {
   score = score+1
   starGroup.destroyEach()
  // rocket.velocityX = 5
}

}

function spawnStars(){
   star = createSprite(2000, random(0,2000), 10, 10)
star.addImage(starImg)
star.scale = 0.5
star.velocityX = -5
starGroup.add(star)
   }

function spawnasteroid1(){
   asteroid1 = createSprite(2000, random(100,900), 10, 10)
asteroid1.addImage(asteroid1Img)
asteroid1.scale = 0.3
asteroid1.velocityX = -5
asteroid1Group.add(asteroid1)
}

function spawnasteroid2(){
   asteroid2 = createSprite(2000, random(100,900), 10, 10)
asteroid2.addImage(asteroid2Img)
asteroid2.scale = 0.3
asteroid2.velocityX = -5
asteroid2Group.add(asteroid2)
}

/*function gameover() {
   space.velocityX = 0
   asteroid1.velocityX = 0
   asteroid2.velocityX = 0
}
*/





