class Rope{

    constructor(bodyA,pointB){

        var options={
            
            stifness:1.2,
            length:200,
            bodyA:bodyA,
            pointB:pointB

        }

       
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){

        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;

        stroke("red");
        line(pointB.x, pointB.y, pointA.x, pointA.y);

    }

}