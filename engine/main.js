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
        super(position, "Main", 5)
    }

    start()
    {        
        SetLayerCompositeOperation(5, "lighter")
        for(var i = 0; i < 10; i++)
        {
            let radius = JMath.RandomRange(50, 100)
            let spd = 10
            instantiate(new BouncingBall({x: JMath.RandomRange(radius, canvasSize.x - radius),
                                        y: JMath.RandomRange(radius, canvasSize.y - radius)},
                                        radius,
                                        JColor.RandomColor(0.7, 0.5, 1),
                                        {x:JMath.RandomRange(-spd, spd),
                                        y:JMath.RandomRange(-spd, spd)}))
        }
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