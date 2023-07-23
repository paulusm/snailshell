function setup() {
    createCanvas(600, 600);
    noLoop();
  }
  
  function draw() {
    background(255, 204, 0);
    noFill();
    let a = 1;
    let b = 18;
    let theta = 0;
    let x=0;
    let y=0;
    for (let r = 0; r< 4000; r+=1 ) {
        theta = r/180;
        x	= a * cos(theta) * (exp() ^ (b * theta));
        y	=	a * sin(theta) * (exp() ^ (b * theta));
        point(x+300,y+300);
        console.log(x,y);
    }
    
 
  }