const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

const settings = {
  dimensions: [ 2000, 250 ],
  animate: true,
};


const sketch = ({ context, width, height }) => {
  const agents = [];
  
  for (let i = 0; i < 65; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    agents.push(new Agent(x, y));
  }

  return ({ context, width, height }) => {
    context.backgroundColor = "rgb(13, 17, 23)";
    context.fillStyle = "rgb(13, 17, 23)";
    context.fillRect(0, 0, width, height);
    
    for (i = 0; i < agents.length; i++) {
      const agent = agents[i];
      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j];
        
        const dist = agent.pos.getDistance(other.pos);
        if (dist > 200) continue;

        context.lineWidth = math.mapRange(dist, 0, 200, 10, 1); 
        context.beginPath();
        context.strokeStyle = "black"
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
    
      }
    }

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
      agent.bounce(width, height);
    })
  };
};

canvasSketch(sketch, settings);

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.radius = random.range(1.5, 5);
    this.speed_factor = (2.5 / this.radius) * random.range(0.2, 1)
    this.vel = new Vector(random.range(-0.7, 0.5) * this.speed_factor, random.range(-0.7, 0.5)* this.speed_factor);
    
  }
  
  bounce(widht, height) {
    if (this.pos.x <= 0 + this.radius || this.pos.x >= widht - this.radius) this.vel.x *= -1;
    if (this.pos.y <= 0 + this.radius || this.pos.y >= height - this.radius) this.vel.y *= -1;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {

    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.lineWidth = 1;

    context.beginPath();
    context.strokeStyle = "white"
    context.fillStyle = "white"
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.restore();
  }
}

