let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

//data
let data = [130, 300, 170, 240, 50]

let x = 0

//ScatterChart class
class ScatterChart{
    constructor(x, y, width, height){
        this.x = 50 || x
        this.y = 50 || y
        this.width = 600 || width
        this.height = 400 || height
    }

    drawText(){
        ctx.font = '24px serif'
        ctx.fillText('Scatter Plot', 250, 30)
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

//Point class
class Point{
    constructor(x, data, next){
        this.x = x
        this.width = 50
        this.data = data
        this.contentHeight = scatterChart.height - 50
        this.y = this.contentHeight - this.data
        this.next = this.contentHeight - next
    }
    drawText(){
        ctx.font = '18px serif'
        ctx.fillStyle =  'rgb(0, 0, 0)'
        ctx.fillText(`${this.data}`, this.x + (this.width / 2) - 10, this.y - 10)
    }

    drawPoint(){
        ctx.fillStyle =  'rgba(0, 0, 200, 0.6)'
        ctx.fillRect(this.x, this.y, 10, 10)
    }
}

//new instance of BarChart
let scatterChart = new ScatterChart()
scatterChart.drawText()
scatterChart.drawAxis()
scatterChart.drawAxisText()

//intialize bar according to data length
for (let i = 0; i < data.length; i++){
    x = x + 80
    let j = 0
    let next = data[j++]
    let point = new Point(x, data[i], next)
    point.drawPoint()
    point.drawText()
}





