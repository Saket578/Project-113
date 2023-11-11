function preload(){

}

function setup(){
    canvas = createCanvas(1000, 1000);
    canvas.position(300, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){

    rect(450,150, 100, 50, 30);
    rect(550,150,100,50,30); 
    fill(color('red'));
    triangle(50, 250, 200, 170, 280, 300);  
    fill(color('yellow'));
    circle(100,400,80);
    fill(color('navy'));
    rect(500,200,160,460)
    fill(color('lime'));
    rect(100,40,400,100,20);

}