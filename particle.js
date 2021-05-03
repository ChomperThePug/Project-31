class Particle {
    constructor(x, y, r) {
        var options = {
            isStatic: false
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        ellipseMode(RADIUS);
        fill(this.color);
        circle(pos.x, pos.y, this.r);

    }
};