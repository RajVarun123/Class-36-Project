var database;
var canvas;
var gameState = 0;
var peopleCount;
var backgroundImage;
var quiz, people, game;
var lizardImg;

function preload() {
  lizardImg = loadImage("lizard.png");
}

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth - 30,displayHeight - 180);

  game = new Game();
  game.getstate();
  game.start();
}

function draw(){
  drawSprites();
}