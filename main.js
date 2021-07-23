function preload(){
}

function take_snapshot(){
    save('My Image')
}

function setup(){

canvas = createCanvas(600, 600);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){

image(video, 200, 200, 200, 200)
fill("orange")
square(190,190, 10);
rect(200, 195, 200, 1);
rect(405, 200, 1, 200);
square(400,190, 10);
square(400,400, 10);
rect(200, 405, 200, 1);
rect(195, 200, 1, 200);
square(190,400, 10);
fill("blue")
circle(210, 195, 10);
fill("orange")
circle(225, 195, 10);
fill("blue")
circle(240, 195, 10);
fill("orange")
circle(255, 195, 10);
fill("blue")
circle(270, 195, 10);
fill("orange")
circle(285, 195, 10);
fill("blue")
circle(300, 195, 10);
fill("orange")
circle(315, 195, 10);
fill("blue")
circle(330, 195, 10);
fill("orange")
circle(345, 195, 10);
fill("blue")
circle(360, 195, 10);
fill("orange")
circle(375, 195, 10);
fill("blue")
circle(390, 195, 10);
fill("orange")
// another part of the
fill("blue")
circle(405, 210, 10);
fill("orange")
circle(405, 225, 10);
fill("blue")
circle(405, 240, 10);
fill("orange")
circle(405, 255, 10);
fill("blue")
circle(405, 270, 10);
fill("orange")
circle(405, 285, 10);
fill("blue")
circle(405, 300, 10);
fill("orange")
circle(405, 315, 10);
fill("blue")
circle(405, 330, 10);
fill("orange")
circle(405, 345, 10);
fill("blue")
circle(405, 360, 10);
fill("orange")
circle(405, 375, 10);
fill("blue")
circle(405, 390, 10);
fill("orange")
// left side of
fill("blue")
circle(195, 210, 10);
fill("orange")
circle(195, 225, 10);
fill("blue")
circle(195, 240, 10);
fill("orange")
circle(195, 255, 10);
fill("blue")
circle(195, 270, 10);
fill("orange")
circle(195, 285, 10);
fill("blue")
circle(195, 300, 10);
fill("orange")
circle(195, 315, 10);
fill("blue")
circle(195, 330, 10);
fill("orange")
circle(195, 345, 10);
fill("blue")
circle(195, 360, 10);
fill("orange")
circle(195, 375, 10);
fill("blue")
circle(195, 390, 10);
fill("orange")
// another circle
fill("blue")
circle(210, 405, 10);
fill("orange")
circle(225, 405, 10);
fill("blue")
circle(240, 405, 10);
fill("orange")
circle(255, 405, 10);
fill("blue")
circle(270, 405, 10);
fill("orange")
circle(285, 405, 10);
fill("blue")
circle(300, 405, 10);
fill("orange")
circle(315, 405, 10);
fill("blue")
circle(330, 405, 10);
fill("orange")
circle(345, 405, 10);
fill("blue")
circle(360, 405, 10);
fill("orange")
circle(375, 405, 10);
fill("blue")
circle(390, 405, 10);
fill("orange")
}