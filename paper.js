class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }
      this.body = Bodies.circle(x,y,r/2,options);
      this.width = width;
      this.height = height;
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
push();
translate(pos.x,pos.y);
      rectMode(CENTER);
      fill(255,0,255);
      ellipse(0,0, this.r, this.r);
    }
  };