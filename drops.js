class Drop{
    constructor(x, y) {
        this.body = Bodies.circle(x,y);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS)
        ellipse(300, 0, this.width, this.height);
        pop();
      }
      update()
      {
        if(this.body.position.y>600)
        {
          this.body.position.y = 0
        }
      }
}