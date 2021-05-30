class Drop{
    constructor(x,y){
        var options = {
            setStatic : false,
            restitution : 0.2,
            airFriction : 0.3,
            density : 1
        }

        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }

    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill("blue");
     noStroke();
     ellipse(0,0,5,15);
     pop();

    }

    update(){
        var pos = this.body.position;
        if(pos.y> height){
            Matter.Body.setPosition(this.body, {x:random(5,390), y:random(5,690)});
        }
    }

    
}