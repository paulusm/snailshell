function setup() {
    createCanvas(600, 600);
    noLoop();
  }
  
  function draw() {
    background('rgba(0,255,0, 0.25)') ;
    noFill();
    strokeWeight(3);
    let a = 8;
    let b = 0.17;
    let theta = 0;
    let x=0;
    let y=0;
    for (let r = 0; r< 120; r+= 0.02 ) {
        theta = r;
        x	= a * cos(theta) * exp(b * theta);
        y	=	a * sin(theta) * exp(b * theta);
        point(x+300,y+200);
        //console.log(x,y);
    }
    
 
  }