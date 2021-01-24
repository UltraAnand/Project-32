class Ball{
    constructor(x, y, r){
        var options = {
            density: 3.5
        }
        this.image1 = loadImage("polygon.png");
        this.body = Bodies.circle(x,y,r, options);
        World.add(world, this.body);
    }

    display(){
        imageMode(CENTER)
        image(this.image1,this.body.position.x,this.body.position.y,30,30);
    }
    
}