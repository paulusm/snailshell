function setup() {
    createCanvas(600, 600);
    noLoop();
  }
  
  function draw() {
    background(255, 204, 0);
    noFill();
    let width = 0.1;
    let height= 0.1
    for (let angle = 0; angle <= 8 * PI; angle += PI/90 ) {
        arc(200, 200, width, height, angle, angle+2);
        width = width + width/80;
        height = height + height/80;
    }
    

 
  }