class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.tool = Constraint.create(options);
        World.add(world, this.tool);
    }
   fly(){
       this.tool.bodyA=null;
   }
   attach(body){
    this.tool.bodyA= body
   }
    display(){
        if(this.tool.bodyA){
        var pointA = this.tool.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}

    
