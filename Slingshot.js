class SlingShot{
    constructor(bodyB, pointA){
        var options = {
            bodyB: bodyB,
            pointA: pointA,
            stiffness: 0.08,
            length: 10
        }
        this.pointA = pointA
        this.sling = Constraint.create(options);
        //this.image1 = loadImage("polygon.png");
        this.body = bodyB;
        //console.log(bodyB);
        //console.log(pointA);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyB = null;
    }

    
    ballBack(body){
        this.sling.bodyB = body

    }

    display(){
        imageMode(CENTER)
        //image(this.image1,this.sling.200,20)
        if(this.sling.bodyB){
            var B = this.sling.bodyB.position;
            var A = this.pointA;
            //console.log(pointA);
            //console.log(pointB);
            //push();
            strokeWeight(1);
            //fill("yellow");
            stroke("yellow")
            line(A.x, A.y, B.x, B.y);
            //line(pointA.x, pointA.y, pointB.x+55, pointB.y-5);

            //circle(pointA.x,pointA.y,20)
            //image(this.image1,B.x,B.y,30,30);
            //pop();
        } //else {
        //    image(this.image1,this.body.position.x,this.body.position.y,30,30);
        //}
    }
    
}