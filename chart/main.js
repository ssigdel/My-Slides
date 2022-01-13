let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


//text
ctx.font = '24px serif'
ctx.fillText('Bar Chart', 250, 30)

//draw line
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(50, 350)
ctx.lineTo(550, 350)
ctx.stroke()

//draw rectangle
ctx.fillStyle = 'rgba(200, 0, 0, 0.6)'
ctx.fillRect(80, 70, 50, 280)

ctx.fillStyle = 'rgba(0, 200, 0, 0.6)'
ctx.fillRect(160, 100, 50, 250)

ctx.fillStyle = 'rgba(0, 0, 200, 0.6)'
ctx.fillRect(240, 120, 50, 230)

ctx.fillStyle = 'rgba(100, 50, 50, 0.6)'
ctx.fillRect(320, 60, 50, 290)

ctx.fillStyle = 'rgba(50, 200, 50, 0.6)'
ctx.fillRect(400, 150, 50, 200)

