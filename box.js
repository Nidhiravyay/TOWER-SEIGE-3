class Block{
    constructor(x, y, width, height){
  
      var options = {
        'restitution':1.0,
        'friction':1.0,
        
    }
      this.visibility=255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
  
      World.add(world,this.body);
    }
  
    display(){
     if(this.body.speed<10){
      var angle= this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      angleMode(RADIANS);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();      
    }else{
      World.remove(world,this.body);
    push();
    this.visibility=this.visibility-1;
    tint(255,this.Visiblity);
    rect(0,0,this.width,this.height);
    pop();
    
    }
    
    }
    score(){
      if(this.visibility<0&&this.visibility>-1005){
    score++
      }
    }
  };




  