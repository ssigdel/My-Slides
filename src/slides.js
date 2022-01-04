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

        this.titleSection.innerText = this.title

        this.newSlide.appendChild(this.titleSection)

        this.bodySection = document.createElement('div')

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





