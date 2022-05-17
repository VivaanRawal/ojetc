img="";
status="";
function preload(){
img=loadImage('TV.jpeg');

}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loadded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);

}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("TV",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);
}
function back(){
    window.location="index.html";
}