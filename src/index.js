let index = 1;
let slides = []

//intialize first slide on window load
window.onload = () => {
    let slide = new Slide(index)
    slides.push(slide)
    slide.createSlide()
}

//create new slide on button click
newSlideButton.onclick = (() => {
    index++
    let slide = new Slide(index)
    slides.push(slide)
    slide.createSlide()
})

//present slide on button click
presentButton.onclick = (() => {
    slides[currentIndex - 1].newSlide.requestFullscreen()

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
    
})

//handle changes in edit section
titleInput.addEventListener('change', (e) => {
    slides[currentIndex - 1].title = e.target.value
    slides[currentIndex -1 ].titleSection.innerText = slides[currentIndex -1 ].title 
})

bodyInput.addEventListener('change', (e) => {
    slides[currentIndex - 1].body = e.target.value
    slides[currentIndex -1].bodySection.innerText = slides[currentIndex -1 ].body
})

editSection.style.backgroundColor = colourInput.value

//handle colour change
colourInput.addEventListener('change', (e) => {
    editSection.style.backgroundColor = e.target.value
})

//click states for text icons
let clickState = {
    clickBoldText : false,
    clickItalicText: false,
    clickLeftAlign: false,
    clickCenterAlign: false,
    clickRightAlign: false
}

//handle text icons click
boldText.addEventListener('click', (e) => {
    if(clickState.clickBoldText){
        e.target.style.backgroundColor = 'transparent'
        e.target.style.padding = '0px'
        titleInput.style.fontWeight = 'normal'
        clickState.clickBoldText = false
    } 
    else{
        e.target.style.backgroundColor = 'lightblue'
        e.target.style.padding = '5px'
        titleInput.style.fontWeight = 'bold'
        clickState.clickBoldText = true
    }
})

italicText.addEventListener('click', (e) => {
    if(clickState.clickItalicText){
        e.target.style.backgroundColor = 'transparent'
        e.target.style.padding = '0px'
        titleInput.style.fontStyle = 'normal'
        clickState.clickItalicText = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        e.target.style.padding = '5px'
        titleInput.style.fontStyle = 'italic'
        clickState.clickItalicText = true
    }
})

leftAlign.addEventListener('click', (e) => {
    if(clickState.clickLeftAlign){
        e.target.style.backgroundColor = 'transparent'
        e.target.style.padding = '0px'
        titleInput.style.textAlign = 'center'
        clickState.clickLeftAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        e.target.style.padding = '5px'
        titleInput.style.textAlign = 'left'
        clickState.clickLeftAlign = true
    }
})

centerAlign.addEventListener('click', (e) => {
    if(clickState.clickCenterAlign){
        e.target.style.backgroundColor = 'transparent'
        e.target.style.padding = '0px'
        titleInput.style.textAlign = 'center'
        clickState.clickCenterAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        e.target.style.padding = '5px'
        titleInput.style.textAlign = 'center'
        clickState.clickCenterAlign = true
    }
})

rightAlign.addEventListener('click', (e) => {
    if(clickState.clickRightAlign){
        e.target.style.backgroundColor = 'transparent'
        e.target.style.padding = '0px'
        titleInput.style.textAlign = 'center'
        clickState.clickRightAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        e.target.style.padding = '5px'
        titleInput.style.textAlign = 'right'
        clickState.clickRightAlign = true
    }
})












