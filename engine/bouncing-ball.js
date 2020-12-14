class BouncingBall extends GameObject
{
    constructor(position, radius, color, velocity, layer)
    {
        super(position, "Bouncing Ball", layer)

        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    update()
    {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        // Check bound collison
        if(this.position.x + this.radius > ctx[this.layer].canvas.width || this.position.x -this.radius < 0)
            this.velocity.x = -this.velocity.x
        if(this.position.y + this.radius > ctx[this.layer].canvas.height || this.position.y - this.radius < 0)
            this.velocity.y = -this.velocity.y

        super.update()
    }

    draw()
    {
        ctx[this.layer].beginPath()
        ctx[this.layer].arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
        ctx[this.layer].fillStyle = this.color
        ctx[this.layer].fill()

        super.draw()
    }
}