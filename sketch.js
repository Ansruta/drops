const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Events=Matter.Events;


function preload(){
    
}

function setup(){
   createCanvas(700,700)
   engine=Engine.create();
   world=engine;
    var maxdrops=100;
    for(var i=0;i<maxdrops;i++){
     var  drops.push(new createdrop(random(0,700),random(0,700)));
    }
}

function draw(){
    background(0)
    Engine.update(engine);
    drops.display();
}   

