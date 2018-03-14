const r = 200;
let totalDots = 0;
let circleDots = 0;
let pi = 0;
let actualPi; 
let approxPi;

function setup() {
	createCanvas(600, 600);
	background(0);
	noFill();
	strokeWeight(2);
	stroke(255);
	translate(width/2, height/2 );
	ellipse(0, 0, r*2, r*2);
	rectMode(CENTER);
	rect(0, 0, r*2, r*2);
	textSize(32);
	fill(255);
	text("Happy \u03C0-Day !!!!", -270, -270)
	actualPi = createP("Actual Pi = "+PI);
	approxPi = createP("Approx Pi = "+pi)

}

function draw() {
	translate(width/2,height/2);
	noFill()
	let x = random(-r,r);
	let y = random(-r,r);
	totalDots++;
	let dist = sqrt((x*x)+(y*y));
	colorMode(HSB, 100);
	if(dist < r){
		let colx = map(x,-r, r,0,100);
		let coly = map(y, -r, r, 0, 100);
		stroke(colx, coly, 100);
		point(x,y);
		circleDots++;
	} else{
		stroke(65);
		point(x,y);
	}

	fill(255);
	pi = 4*(circleDots/totalDots);
	let piText = "Approx Pi = " + pi;
	approxPi.html(piText);
}