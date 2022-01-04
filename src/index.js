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
    editSection.requestFullscreen()
})

titleInput.addEventListener('change', (e) => {
    slides[currentIndex - 1].title = e.target.value
    slides[currentIndex -1 ].titleSection.innerText = slides[currentIndex -1 ].title 
})

bodyInput.addEventListener('change', (e) => {
    slides[currentIndex - 1].body = e.target.value
    slides[currentIndex -1].bodySection.innerText = slides[currentIndex -1 ].body
})

console.log(leftContent.child)








