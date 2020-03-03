function setup() {
    createCanvas(windowWidth, windowHeight);
   
}
    function mousePressed(){
        background(random(mouseX),random(255),random(255))
      }
      //background(250,200,30);
 
      function draw (){
     /* let o=mouseX
      let p=mouseY
      console.log(o,p)*/


    
      fill(20,180,200)
      triangle(420,0,580,0,500,300);
    x=500,y=300 ;
    noFill()
      triangle(350,0,650,0,500,300+500*cos(frameCount%100));

      fill(204,255,255)
      rect(450,200,100,200);

    fill("red");
    q=10 + 40 * tan(frameCount / 100)
    quad(x-q,y,x,y+q,x+q,y,x,y-q);

    fill(102,51,0);
      rect(450,350,100,50);


      line(450,400,400,500);
      line(550,400,600,500);

    //draw ceiling with decorations together
    ceiling (430,110,140,25);	
    ceiling(445,155,110,12);
    ceiling(455,180,90,10);
    ceiling(460,195,80,5);
    ceiling(400,20,200,40);

    //doors with same angle
    door (60,10)
    door (80,12)
    door(120,25)
  }


    function ceiling(a,b,c,d) {
      fill (102,51,0);
      rect(a,b,c,d);
      fill (255);
      rect(500-c/12,b,c/6,d);
      fill (200);
      ellipse(500,b+d/2,d/2,d/4);
    }

   // door(A=length-from-doorEdge-to-x, B=doorWidth)
     function door(A,B,) {
    fill (102,51,0);
    //quad (downleft,upleft,upright,downright)
    //trigonometric function
    quad (x-A,y+A*2, x-A,y-A*3/4, x-(A-B),y-(A-B)*3/4, x-(A-B),y+(A-B)*2);
    quad (x+A,y+A*2, x+A,y-A*3/4, x+(A-B),y-(A-B)*3/4, x+(A-B),y+(A-B)*2);

  } 

