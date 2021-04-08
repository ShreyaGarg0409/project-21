var canvas;
var music;
var s1,s2,s3,s4,ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,500);

    //create 4 different surfaces
    s1 = createSprite(75,470,140,20)
  s1.shapeColor = "blue"
    s2 = createSprite(225,470,140,20)
  s2.shapeColor = "orange"
    s3 = createSprite(375,470,140,20)
  s3.shapeColor = "red"
    s4 = createSprite(525,470,140,20)
  s4.shapeColor = "green"
  
 
    //create box sprite and give velocity
    ball = createSprite(random(550,20),200,20,20)
  ball.shapeColor = "white"
  ball.velocityY = 5
  ball.velocityX = 5

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites()
   ball.bounceOff(edges)
    ball.bounceOff(s1)
    ball.bounceOff(s2)
    ball.bounceOff(s3)
    ball.bounceOff(s4)

    //add condition to check if box touching surface and make it box
    if (s3.isTouching(ball) && (ball.bounceOff(s3)) ) {
        ball.shapeColor = "red"
    }
    drawSprites()
}
