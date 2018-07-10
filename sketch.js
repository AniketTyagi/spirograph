var array = [], points = [];

function setup() {
  createCanvas(1000, 800);
  //I shows how many circles are generated
  for(var i = 0; i < 15; i++) {
    //Manipulating the variables below in a relational method can lead to cool pattern or even fractal graphs!
    //Mess around with these variables to create cool spirographs (or be random ¯\_(ツ)_/¯)
    
    array[i] = [];
    //Represents Diamter of circle
    array[i][0] = 20;
    //Reperesents angle of start
    array[i][1] = 0;
    //Represent degree of rotation per screen refresh
    array[i][2] = i*cos(Math.pow(-1, i))/180*PI;
  }
  console.log(array);
}

function draw() {
  background(15, 15, 15);
  circleGraph(0, width/2, height/2);
}

function circleGraph(i, x, y) {
  if(i < array.length) {
    array[i][1] += array[i][2];
    ellipse(x, y, array[i][0], array[i][0]);
    return circleGraph(i+1, x+(array[i][0]*cos(array[i][1])), y+(array[i][0]*sin(array[i][1])));
  } else {
    fill(15, 15, 15)
    ellipse(x, y, array[array.length-1][0], array[array.length-1][0])
    points[points.length] = [x, y];
    for(var j = 1; j < points.length; j++) {
      stroke(255, 255, 255); line(points[j][0], points[j][1], points[j-1][0], points[j-1][1]);
    }
  }
}
