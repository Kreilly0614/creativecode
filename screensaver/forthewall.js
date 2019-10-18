let stars = [];

function setup() {
  createCanvas(1200, 1000);
  fill(255);
  noStroke();
}

function draw() {
  background('black');
  fill(0, 200, 150, 255);
  let t = frameCount / 100;

//Watched TheCodingTrain videos on purple rain, and also creating snow
//https://www.youtube.com/watch?v=cl-mHFCGzYk&vl=en

  for (var i = 0; i < random(1); i++) {
    stars.push(new star());
  }
  
  for (let shine of stars) {
    shine.update(t);
    shine.display();
  }
}

function star() {
  this.posX = 0;
  this.posY = 0;
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 8);
  this.radius = sqrt(random(pow(width / 2, 2)));
  this.update = function(time) {
    let w = 0.02;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
//Changing speed of y / other functions:
//https://p5js.org/examples/simulate-snowflakes.html
    this.posY += pow(this.size, 1.9);
    if (this.posY > height) {
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
