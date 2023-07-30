
function setup() {
    createCanvas(600, 600, WEBGL);
    noLoop();
  }
  
  function draw() {
    
    camera(-200, 500, 20, 20, 50, 60, 1, 1, 5);
    fill(50, 150, 150);
    stroke('#000000');
    //strokeWeight(4);
    background(205, 105, 94);
    //translate(20,200);
    cylinder(6, 2, 10);
    translate(-2,-2);
    cylinder(7, 2, 10);
    translate(-2,-2);
    cylinder(8, 2, 10);
    cylinder(9, 2, 10);
    translate(-2,-2);
    cylinder(10, 2, 10);
    translate(-2,-2);
    cylinder(11, 2, 10);
  }