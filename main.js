noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup ()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500,500);
    canvas.position (560,150);

    poseNet = ml5.poseNet (video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#FFA500');

    document.getElementById ("square_side").innerHTML = "Width and height of a square will be = " + difference + "px";
    fill('#48C9B0');
    stroke ('#48C9B0 ');
    square (noseX,noseY, difference);
}

function modelLoaded()
{
    console.log (' PoseNet is Initialized!');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log (results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log ("noseX = " + noseX +"noseY = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log ("leftWrsitX = " + leftWristX +"rightWristX = " + rightWristX + "difference = " + difference);
    }
}





