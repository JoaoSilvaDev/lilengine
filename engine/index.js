// This is the index file, this takes care of initializing the canvas, layers, the main object where most of the code will be

// Rendering
let ctx = []
let ctxCompositeOperation = []
let renderingLayerCount
let canvasSize = {x:0, y:0}

// Gameobjects
let gameObjects = []

window.onload = start

function start()
{
    // Rendering setup
    renderingLayerCount = document.querySelectorAll('canvas').length
    canvasSize.x = innerWidth
    canvasSize.y = innerHeight

    for(var i = 0; i < renderingLayerCount; i++)
    {
        ctx[i] = document.getElementById('layer'+i).getContext('2d')
        ctx[i].canvas.width = canvasSize.x
        ctx[i].canvas.height = canvasSize.y
        ctxCompositeOperation[i] = "source-over"
    }

    // Initialize Main
    instantiate(new Main())

    // Start update loop
    window.requestAnimationFrame(update)
}

function update(timeStamp)
{
    // Update all GameObjects
    gameObjects.forEach(go => {
        if(go.active)
            go.update(timeStamp)
    })
    
    // Call main draw
    draw()

    // Queue next update
    window.requestAnimationFrame(update)
}

function draw()
{
    // Clear all contexts
    for(var i = 0; i < renderingLayerCount; i++)
    {
        ctx[i].clearRect(0,0, ctx[i].canvas.width, ctx[i].canvas.height)
        ctx[i].globalCompositeOperation = ctxCompositeOperation[i]
    }

    // Fill bottom layer
    ctx[0].fillStyle = "#475c7a"
    ctx[0].fillRect(0,0, ctx[0].canvas.width, ctx[0].canvas.height)

    // Draw all GameObjects
    gameObjects.forEach(go => {
        if(go.active)
            go.draw()
    })
}

function instantiate(gameObject)
{
    gameObjects.push(gameObject)
    gameObject.start()
}

function SetLayerCompositeOperation(index, operation)
{
    ctxCompositeOperation[index] = operation
}
