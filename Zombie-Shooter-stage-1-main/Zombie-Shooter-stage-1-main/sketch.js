var bg,heart1,heart2,heart3,heart1Img,heart2Img,heart3Img,shooter,shooterImg,zombie,zombieImg,loserImg,winnerImg,losersound,winnersound,bulletsound
var gameState= "start"
var zombieGroup
var score = 0
var life = 3
var bullets = 30






function preload() {
bg = loadImage("assets/bg.jpeg")
heart1Img = loadImage("assets/heart_1.png")
heart2Img = loadImage("assets/heart_2.png")
heart3Img = loadImage("assets/heart_3.png")
winnerImg = loadImage("assets/PUBG victory.png")
loserImg = loadImage("assets/I lost.png")
bulletImg = loadImage("assets/Pew Pew.png")
zombieImg = loadImage("assets/zombie.png")
shooterImg = loadImage("assets/shooter_2.png")
shooterShooting = loadImage("assets/shooter_3.png")
loseSound = loadSound("assets/lose.mp3")
winSound = loadSound("assets/win.mp3")
explosionSound = loadSound("assets/explosion.mp3")
bulletSound= loadSound("assets/Shotgun.mp3")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
heart1 = createSprite(displayWidth -150,40)
heart1.addImage(heart1Img)
heart1.scale = 0.4
heart1.visible = false

heart2 = createSprite(displayWidth -100,40)
heart2.addImage(heart2Img)
heart2.scale = 0.4
heart2.visible = false

heart3 = createSprite(displayWidth -150,40)
heart3.addImage(heart3Img)
heart3.scale = 0.4
heart3.visible = true

player = createSprite(displayWidth-1150,displayHeight-300)
player.addImage(shooterImg)
player.scale = 0.3

zombieGroup = new Group()
bulletGroup = new Group()

 }

function draw() {
background(bg)
if(gameState === "start"){
if(life === 3){
heart3.visible = true
heart2.visible = false
heart1.visible = false
}
if(life === 2){
  heart2.visible = true
  heart3.visible = false
  heart1.visible = false
  }
  if(life === 1){
    heart1.visible = true
    heart2.visible = false
    heart3.visible = false
    }
    if(life === 0){
      gameState = "over"
    }
    createZombie()

if(keyDown("UP_ARROW")|touches.legnth>0){
  player.y -= 10
}
if(keyDown("DOWN_ARROW")|touches.legnth>0){
  player.y += 10
}
if(keyWentDown("space")){
bullet=createSprite(displayWidth-1150,player.y-30)
bullet.velocityX = 20
bullet.addImage(bulletImg)
bullet.scale = 0.4
bulletGroup.add(bullet)
player.addImage(shooterShooting)
bulletSound.play()


}
}
drawSprites();

}
function createZombie(){
if(frameCount%60===0){
  zombie = createSprite(random(550,1400),random(100,600))
  zombie.addImage(zombieImg)
  zombie.scale = 0.15
  zombie.velocityX = -3
  zombie.lifetime=150
  zombieGroup.add(zombie)
}
}