function setup() { 
  createCanvas(600,600);
} 

function draw() { 
  background(70,80,100);

//hours circle
fill(0);
ellipse(300,300,400,400);
fill(110,10,10);
arc(300,300,400,400,1.5*PI,(hour()/6*PI-HALF_PI));
fill(70,80,100);
ellipse(300,300,365,365);

//minutes circle
fill(0);
ellipse(300,300,300,300);
fill(0,100,200);
arc(300,300,300,300,1.5*PI,(minute()/30*PI-HALF_PI));
fill(70,80,100);
ellipse(300,300,265,265);

//seconds circle
fill(0);
ellipse(300,300,200,200);
fill(40,500,100);
arc(300,300,200,200,1.5*PI,(second()/30*PI-HALF_PI));
fill(22);
ellipse(300,300,165,165);

//milliseconds circle
fill(0);
ellipse(300,300,100,100);
fill(90,9,90);
arc(300,300,100,100,1.5*PI,(millis()/500*PI-HALF_PI));
fill(30);
ellipse(300,300,65,65);

//actual time as seen on top left
text(hour() + " : " + minute() + " : " + second(), 20, 20);

}
