var cat, catRunning ,catSad;
var garden;
var mouseStanding,mouseTeasing,mouseEnd;
var bg , canvas;
function preload() {
    //load the images here
    cat = loadImage("images/cat1.png");
    catRunning = loadAnimation("images/cat2.png","images/cat3.png");
    catSad = loadImage("images/cat4.png"); 
    garden = loadImage("images/garden.png");
    mouseStanding = loadImage("images/mouse1.png");
    mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseEnd=loadImage("images/mouse4.png")
}

function setup(){
    canvas=createCanvas(1000,800);
    

  cat1 = createSprite(870,600)
  cat1.addImage("cat",cat); 
  cat1.scale=0.2;

  mouse1 = createSprite(90,600),
  mouse1.addImage("mouseStanding",mouseStanding);
  mouse1.scale=0.15;
    
   
    //create tom and jerry sprites here

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat1.x -mouse1.x<(cat1.width - mouse1.width)/2){ 
        cat1.velocityX = 0;
        mouse1.addImage("mouseEnd",mouseEnd); 
        mouse1.changeAnimation("mouseEnd");
        cat1.addAnimation("catsad",catSad);
        cat1.changeAnimation("catsad")
        cat1.x=300;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
    cat1.velocityX = -5; 
    cat1.addAnimation("cat",catRunning);
    cat1.changeAnimation("cat");
    mouse1.addAnimation("mouse",mouseTeasing);
    mouse1.changeAnimation("mouse")
    cat1.scale=0.2;

} 



}
