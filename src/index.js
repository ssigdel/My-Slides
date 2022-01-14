let slides = JSON.parse(localStorage.getItem('slides')) || []
let index = slides.length || 1


//intialize first slide on window load
window.onload = () => {
    if(slides.length != 0){
        for(let i = 0; i < slides.length; i++){
            let slide = new Slide(slides[i].index, slides[i].title, slides[i].body, slides[i].imageUrl )
            slide.createSlide()
        }
    }
    else{
        let slide = new Slide(index)
        slides.push(slide)
        slide.createSlide()
        localStorage.setItem('slides', JSON.stringify(slides))
    }
}

//create new slide on button click
newSlideButton.onclick = (() => {
    index++
    let slide = new Slide(index)
    slides.push(slide)
    slide.createSlide()
    localStorage.setItem('slides', JSON.stringify(slides))
})

//present slide on button click
presentButton.onclick = (() => {
    slides[currentIndex - 1].newSlide.requestFullscreen()

    document.addEventListener('keydown', (event) => {
        if(event.code === 'ArrowRight'){
            currentIndex++
            slides[currentIndex -1].newSlide.requestFullscreen()
            if(currentIndex > slides.length){
                if( slides[currentIndex -1].newSlide.fullscreenElement){
                    slides[currentIndex -1].newSlide.exitFullscreen()
                }
            }
        }
    
        if(event.code === 'ArrowLeft'){
            currentIndex--
            slides[currentIndex -1].newSlide.requestFullscreen()
            if(currentIndex <= 0){
                if( slides[currentIndex -1].newSlide.fullscreenElement){
                    slides[currentIndex -1].newSlide.exitFullscreen()
                }
            }
        }
    })
    
})

//handle changes in edit section
titleInput.addEventListener('change', (e) => {
    slides[currentIndex - 1].title = e.target.value
    slides[currentIndex -1 ].titleSection.innerText = slides[currentIndex - 1].title
    localStorage.setItem('slides', JSON.stringify(slides))
})

bodyInput.addEventListener('change', (e) => {
    slides[currentIndex - 1].body = e.target.value
    slides[currentIndex -1].bodySection.innerText = slides[currentIndex - 1].body
    localStorage.setItem('slides', JSON.stringify(slides))
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

//nav items click state
let navItemClick = {
    clickInsertImage : false,
    clickTheme : false,
    clickLayout: false
}

//insert image section
insertImage.addEventListener('click', (e) => {
    if(navItemClick.clickInsertImage){
        e.target.style.textDecoration = 'none'
        bodyInput.style.display = 'block'
        imageUpload.style.display = 'none'
        navItemClick.clickInsertImage = false
    }
    else{
        e.target.style.textDecoration = 'underline'
        bodyInput.style.display = 'none'
        imageUpload.style.display = 'block'
        navItemClick.clickInsertImage = true
    }
})


//handle theme click
theme.addEventListener('click', (e) => {
    if(navItemClick.clickTheme){
        e.target.style.textDecoration = 'none'
        slides[currentIndex - 1].newSlide.style.background = '#333'
        slides[currentIndex - 1].newSlide.style.color = 'white'
        slides[currentIndex - 1].newSlide.style.border = 'none'
        navItemClick.clickTheme = false
    } else{
        e.target.style.textDecoration = 'underline'
        slides[currentIndex - 1].newSlide.style.backgroundColor = 'white'
        slides[currentIndex - 1].newSlide.style.color = 'black'
        slides[currentIndex - 1].newSlide.style.border = '2px solid #777'
        navItemClick.clickTheme = true
    }
    
})

//handle layout click
layout.addEventListener('click', (e) => {
    if(navItemClick.clickLayout){
        e.target.style.textDecoration = 'none'
        inputContainer.style.flexDirection = 'column'
        navItemClick.clickLayout = false
    } else{
        e.target.style.textDecoration = 'underline'
        inputContainer.style.flexDirection = 'row'
        navItemClick.clickLayout = true
    }
})

//change view
rightView.addEventListener('click', (e) => {
    mainContainer.style.flexDirection = 'row-reverse'
})


leftView.addEventListener('click', (e) => {
    mainContainer.style.flexDirection = 'row'
})


//delete slide
document.addEventListener('keydown', (e) => {
    if(e.code === 'Delete'){
        slides.splice(currentIndex - 1, 1)
        if(currentIndex - 1 < slides.length){
            for(let i = currentIndex - 1; i < slides.length; i++){
                slides[i].index = slides[i].index - 1
            }
        }
        localStorage.setItem('slides', JSON.stringify(slides))
        location.reload()
    }

})

//active section
let activeInput = ''

const onMouseUp = (e) => {
    activeInput = document.activeElement
}

titleInput.addEventListener('mouseup', onMouseUp, false)
bodyInput.addEventListener('mouseup', onMouseUp, false)

boldText.addEventListener('click', (e) => {
    if(clickState.clickBoldText){
        e.target.style.backgroundColor = 'transparent'
        activeInput.style.fontWeight = 'normal'
        clickState.clickBoldText = false
    } 
    else{
        e.target.style.backgroundColor = 'lightblue'
        activeInput.style.fontWeight = 'bold'
        clickState.clickBoldText = true
    }
})

italicText.addEventListener('click', (e) => {
    if(clickState.clickItalicText){
        e.target.style.backgroundColor = 'transparent'
        activeInput.style.fontStyle = 'normal'
        clickState.clickItalicText = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        activeInput.style.fontStyle = 'italic'
        clickState.clickItalicText = true
    }
})

leftAlign.addEventListener('click', (e) => {
    if(clickState.clickLeftAlign){
        e.target.style.backgroundColor = 'transparent'
       activeInput.style.textAlign = 'center'
        clickState.clickLeftAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        activeInput.style.textAlign = 'left'
        clickState.clickLeftAlign = true
    }
})

centerAlign.addEventListener('click', (e) => {
    if(clickState.clickCenterAlign){
        e.target.style.backgroundColor = 'transparent'
        activeInput.style.textAlign = 'center'
        clickState.clickCenterAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        activeInput.style.textAlign = 'center'
        clickState.clickCenterAlign = true
    }
})

rightAlign.addEventListener('click', (e) => {
    if(clickState.clickRightAlign){
        e.target.style.backgroundColor = 'transparent'
        activeInput.style.textAlign = 'center'
        clickState.clickRightAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        activeInput.style.textAlign = 'right'
        clickState.clickRightAlign = true
    }
})









