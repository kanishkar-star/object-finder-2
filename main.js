status = false;

function setup(){
    canvas = createCanvas(480, 380);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status - Detecting Objects';

    var synth = window.speechSynthesis;

    var speak_data = "Detecting objects";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    objMentioned = document.getElementById('input').value;
    if(objMentioned == ''){
        alert('please insert your name');
    }
    else{
        alert('Successfully done');
    }
}

function modelLoaded(){
    console.log('model is Loaded');
    status = true;
}




