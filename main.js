nosey = 0
noseX =  0

function preload() {
    oh_nose = loadImage('https://i.postimg.cc/wBFGdVQ8/dew4c27-7f49b10e-a03b-411c-83fd-8cb241fc748e.png')
    heed = loadImage('https://i.postimg.cc/WzcRpP4F/chainmail-coif-1-600x600.png')
    neck = loadImage('https://i.postimg.cc/t469jDkM/Roberto-Coin-Diamonds-by-the-Inch-18-K-Yellow-Gold-and-18-K-White-Gold-Dogbone-Chain-Necklace-with-Dia.webp')
}
function setup() {
    var canva = createCanvas(400, 300)
    canva.center()
    video = createCapture(VIDEO)
    video.size(400, 300)
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded() {
    console.log("AS is ready to be an artificial stupidity")
}
function gotPoses(results) {
    if (results.length > 0) { 
        console.log(results)
        noseX = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log("x = " + noseX)
        console.log("y = " + nosey)
    }
}
function draw() {
    image(video, 0, 0, 400, 300)
    fill(255, 0, 0)
    stroke(255, 0, 0)
    image(heed, noseX-85, nosey-80, 200, 200)
    image(oh_nose, noseX-70, nosey-100, 150, 150)
    image(neck, noseX-70, nosey+30, 150, 150)
}
function yeetintofolder() {
    save("Jevil.png")
}