let index = 1;
let slides = []

window.onload = () => {
    let slide = new Slide(index)
    slides.push(slide)
    slide.createSlide()
}

newSlideButton.onclick = (() => {
    index++
    let slide = new Slide(index)
    slides.push(slide)
    slide.createSlide()
})

presentButton.onclick = (() => {
    slides[currentIndex - 1].newSlide.requestFullscreen()
})

document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight'){
        currentIndex++
        slides[currentIndex -1].newSlide.requestFullscreen()
        if(currentIndex > slides.length){
            currentIndex = 0

        }
    }

    if(event.code === 'ArrowLeft'){
        currentIndex--
        slides[currentIndex -1].newSlide.requestFullscreen()
        if(currentIndex <= 0){
            currentIndex = slides.length
        }
    }
})

titleInput.addEventListener('change', (e) => {
    slides[currentIndex - 1].title = e.target.value
    slides[currentIndex -1 ].titleSection.innerText = slides[currentIndex -1 ].title 
})

bodyInput.addEventListener('change', (e) => {
    slides[currentIndex - 1].body = e.target.value
    slides[currentIndex -1].bodySection.innerText = slides[currentIndex -1 ].body
})

editSection.style.background = colourInput.value

colourInput.addEventListener('change', (e) => {
    editSection.style.backgroundColor = e.target.value
})











