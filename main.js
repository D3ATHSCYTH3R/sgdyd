s1="";
s2="";

lwx=0;
lwy=0;
rwx=0;
rwy=0;

function preload(){
    s1=loadSound("music.mp3");
    s2=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(600, 450);
canvas.center();

video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video ,modelLoaded);
posenet.on('poses', gotPoses);

}
function draw(){
image(video,0,0,600,450);
}
function modelLoaded(){
    console.log('modelLoaded');
}
function gotPoses(results){
    if(results.length>0){
    
        lwx=results[0].pose.leftWrist.x;
        lwy=results[0].pose.leftWrist.y;
        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;

    }
}