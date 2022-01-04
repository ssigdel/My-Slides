let currentIndex = 1

class Slide{
    constructor(index){
        this.index = index
        this.title = `Title ${this.index}`
        this.body = `Body ${this.index}`
    }

    createSlide(){
        this.newSlide = document.createElement('div')

        this.newSlide.setAttribute('class', 'slide')

        this.titleSection = document.createElement('div')

        this.titleSection.style.height = '20px'
        this.titleSection.style.width = '50px'
        this.titleSection.style.color = 'white'

        this.titleSection.innerText = this.title

        this.newSlide.appendChild(this.titleSection)

        this.bodySection = document.createElement('div')

        this.bodySection.style.height = '20px'
        this.bodySection.style.width = '50px'
        this.bodySection.style.color = 'white'

        this.bodySection.innerText = this.body

        this.newSlide.appendChild(this.bodySection)

        this.newSlide.addEventListener('click', this.handleSlideClick)

        leftContent.appendChild(this.newSlide)
    }

    handleSlideClick = () => {
        titleInput.value = this.title 
        bodyInput.value = this.body 

        currentIndex = this.index

    }

}





