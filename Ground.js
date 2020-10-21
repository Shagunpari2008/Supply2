class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      Ground.body = Bodies.rectangle(x,y,width,height,options);
      Ground.width = width;
      Ground.height = height;
      World.add(world, Ground.body);
    }
    display(){
      var pos =Ground.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, Ground.width, Ground.height);
    }
  }