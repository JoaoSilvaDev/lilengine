// Time
let secondsPassed = 0
let oldTimeStamp = 0
let fps = 0

// Debug
let showFps = true
    
class Main extends GameObject
{
    constructor(position)
    {
        super(position, "Main", 0)
    }

    start()
    {  
        instantiate(new BouncingBall({x: canvasSize.x/2, y:canvasSize.y/2}, 25, "#fcbb6d", {x:10, y:10}))
    }

    update(timeStamp)
    {
        // Measure fps
        if(showFps)
        {
            secondsPassed = (timeStamp - oldTimeStamp) / 1000
            oldTimeStamp = timeStamp
            fps = Math.round(1 / secondsPassed)
        }
    }

    draw()
    {
        // Draw fps
        if(showFps)
        {
            ctx[9].font = '15px Arial'
            ctx[9].fillStyle = 'white'
            ctx[9].fillText("fps " + fps, 10, 20)
        }
    }
}