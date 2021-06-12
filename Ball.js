class Ball{
    constructor(x,y){
        var options={
            density:1.0,
            frictionAir:0.005

        }

        this.body=Bodies.rectangle(x,y,80,80,options);
        this.width=80;
        this.height=80;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("gold");
        ellipse(0,0,this.width,this.height);
        pop()
    }
}