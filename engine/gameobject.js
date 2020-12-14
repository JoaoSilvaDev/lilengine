class GameObject
{
    constructor(position = {x:0,y:0}, name = "Empty", layer = 5)
    {
        this.position = position
        this.name = name
        this.layer = layer
        this.active = true
    }

    start(){}    
    update(){}
    draw(){}
}