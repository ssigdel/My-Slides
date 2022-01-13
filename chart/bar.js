let barCanvas = document.getElementById('canvas')
let ctx = barCanvas.getContext('2d')

//data
let data = [230, 200, 180, 240, 150]

let x = 0

//backgroundColor
let backgroundColor = [
    'rgba(200, 0, 0, 0.6)', 
    'rgba(0, 200, 0, 0.6)', 
    'rgba(0, 0, 200, 0.6)', 
    'rgba(100, 50, 50, 0.6)', 
    'rgba(50, 200, 50, 0.6)'
]

//BarChart class
class BarChart{
    constructor(x, y, width, height){
        this.x = 50 || x
        this.y = 50 || y
        this.width = 600 || width
        this.height = 400 || height
    }

    drawText(){
        ctx.font = '24px serif'
        ctx.fillText('Bar Chart', 250, 30)
    }

    drawAxis(){
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.height - this.y)
        ctx.lineTo(this.width - this.x, this.height - this.y)
        ctx.stroke()
    }
    drawAxisText(){
        ctx.font = '16px serif'
        ctx.fillText('x-axis', this.width / 2 - 50, this.height - 30)
       ctx.fillText('y-axis', 5, this.height / 2)
    }
}

//Bar class
class Bar{
    constructor(x, data, backgroundColor){
        this.x = x
        this.width = 50
        this.data = data
        this.backgroundColor = backgroundColor
        this.contentHeight = 350
        this.y = this.contentHeight - this.data
    }
    drawText(){
        ctx.font = '18px serif'
        ctx.fillText(`${this.data}`, this.x + (this.width / 2) - 10, this.y - 10)
    }

    drawRectangle(){
        ctx.fillStyle = this.backgroundColor
        ctx.fillRect(this.x, this.y, this.width, this.contentHeight - this.y )
    }
}


//new instance of BarChart
let barChart = new BarChart()
barChart.drawText()
barChart.drawAxis()
barChart.drawAxisText()

//intialize bar according to data length
for (let i = 0; i < data.length; i++){
    x = x + 80
    let bar = new Bar(x, data[i], backgroundColor[i])
    bar.drawRectangle()
    bar.drawText()
}








