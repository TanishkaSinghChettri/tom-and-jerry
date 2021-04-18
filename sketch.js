var tom, jerry, bgImg;
var tomImg1, mouseImg1, tomImg2,mouseImg2;


function preload() {
    //load the images here
  bgImg= loadImage("images/garden.png")
tomImg1= loadAnimation("images/cat1.png")
jerryImg1=loadanimation("images/mouse1.png")
tomImg2= loadAnimation("images/cat2.png","images/cat3.png")
jerryImg3=loadanimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom= createSprite(350, 350, 50, 30);
    jerry=createSprite (50,350,50,50)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
