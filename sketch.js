var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  car1Image = loadImage("Images/car1.png")
  car2Image = loadImage("Images/car2.png")
  car3Image = loadImage("Images/car3.png")
  car4Image = loadImage("Images/car4.png")

  trackImage = loadImage("Images/track.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
