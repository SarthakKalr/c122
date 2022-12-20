function preload() {}

function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(110, 250)
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,640,480)
    fill(255,0,0)
    circle(55,55,90)
    fill(0,255,0)
rect(585,50,13,400)
rect(50,100,13,290)
 rect(103,430,450,13);
 rect(100, 50, 450, 13)
    fill(0,255,0)
    
    fill(255,0,0)
    circle(590,430,90)
    fill(0,255,0)
    
    fill(255,0,0)
    circle(58,430,90)
    fill(0,255,0)
    
   
    fill(255,0,0)
    circle(590,55,90)
}
function take_snapshot(){
save('Anirudh.png')
}