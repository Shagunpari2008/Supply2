class Box {
    constructor(x, y, width, height) {
      var options = {

}
      Box.body = Bodies.rectangle(x, y, width, height, options);
      Box.width = width;
      Box.height = height;
     
      World.add(world, Box.body);
    }
}