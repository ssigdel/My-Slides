let currentIndex = 1

class Slide{
    constructor(index){
        this.index = index
        this.title = ''
        this.body = ''
    }

    createSlide(){
        this.slideIndex = document.createElement('div')

        this.slideIndex.innerText = this.index

        this.newSlide = document.createElement('div')

        this.newSlide.setAttribute('class', 'slide')

        this.titleSection = document.createElement('div')

        this.titleSection.innerText = this.title

        this.titleSection.style.fontSize = '10px'

        this.newSlide.appendChild(this.titleSection)

        this.bodySection = document.createElement('div')

        this.bodySection.innerText = this.body

        this.bodySection.style.fontSize = '8px'

        this.newSlide.appendChild(this.bodySection)

        this.newSlide.addEventListener('click', this.handleSlideClick)

        leftContent.appendChild(this.slideIndex)

        leftContent.appendChild(this.newSlide)
    }

    handleSlideClick = () => {
        titleInput.value = this.title 
        bodyInput.value = this.body 

        currentIndex = this.index
    }

}





