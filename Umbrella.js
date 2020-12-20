class Umbrella{
    constructor(x, y) {
        var options
        {
          isStatic : true;
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,70,50)
        imageMode(CENTER);
        image(this.image, 300, 550, 70, 50);
        pop();
      }
      
}