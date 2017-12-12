var myColor = 200;
var capture;


function setup() {

	// Create the canvas
	createCanvas(windowWidth, windowHeight);

	// Deal with webcam
	capture = createCapture(VIDEO);
	capture.size(1,1);
	capture.hide();
}

function draw() {

	//get the image
	var myImage = capture.loadPixels();
	
	//get the average color
	camColor = color(myImage.pixels[0], myImage.pixels[1], myImage.pixels[2])
	
	//get the brightness
	var light = brightness(camColor);
	
	background(30);
	
	//Start with transformations
	//move to the center of the canvas
	translate(width / 2, height / 2);

	// Set the new size. Brightness goes from 0 to 255.
	// You can remap it to any size you want.
	var minSize = width / 20;
	var maxSize = width;
	var size = map(light, 0, 255, minSize, maxSize);
	
	//use the captured color as fill
	fill(camColor);
	
	//draw an ellipse
	ellipse(0, 0, size);

	//All transformation are now dropped and the coordinate system is resetted.
	pop();

}

//if the window is resized, update the sketchs
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}