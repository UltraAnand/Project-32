class Box {
  constructor(x, y, color) {
    this.width = 40
    this.height = 50
    this.color = color
    this.visibility = 255
    var options = {
      'restitution': 0.8,
      'friction': 0.3,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);


    World.add(world, this.body);
  }
  score() {
    if (this.visibility < 0 && this.visibility > -105) {
      score++

    }
  }

  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (this.body.speed < 2.5) {
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      push();
      this.visibility = this.visibility - 5
      World.remove(world, this.body);
      tint(255, this.visibility)
      rectMode(CENTER);
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();

    }

  }

}