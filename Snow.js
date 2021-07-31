class Snow{
  constructor(x,y,r){
   var options = {
    
   }
   this.image = loadImage("snowball.png")
   this.r = 10;
   this.lifetime = 100;
   this.body = Bodies.circle(x, y, this.r, options)
   World. add(world, this.body)

}

changePosition(){
  if(this.body.position.y > height){
  Matter.Body.setPosition(this.body,{x:random(0,900),y:random(0,100)});
  }
  }

display(){
   
  var pos = this.body.position;
  var angle = this.body.angle;

  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  // ellipseMode(RADIUS);
  // ellipse(0,0,this.r,this.r);
  imageMode(CENTER)
  image(this.image,0,0,20,20)
  pop();
}

}