let slides = JSON.parse(localStorage.getItem('slides')) || []
let index = slides.length || 0

//intialize first slide on window load
window.onload = () => {
    if(slides){
        for(let i = 0; i < slides.length; i++){
            let slide = new Slide(slides[i].index, slides[i].title, slides[i].body )
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
    localStorage.setItem('slides', JSON.stringify(slides))

})

if(bodyInput.getAttribute('type') != 'file'){
    bodyInput.addEventListener('change', (e) => {
        slides[currentIndex - 1].body = e.target.value
        slides[currentIndex -1].bodySection.innerText = slides[currentIndex -1 ].body
        localStorage.setItem('slides', JSON.stringify(slides))
    })
}

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
        titleInput.style.fontWeight = 'normal'
        clickState.clickBoldText = false
    } 
    else{
        e.target.style.backgroundColor = 'lightblue'
        titleInput.style.fontWeight = 'bold'
        clickState.clickBoldText = true
    }
})

italicText.addEventListener('click', (e) => {
    if(clickState.clickItalicText){
        e.target.style.backgroundColor = 'transparent'
        titleInput.style.fontStyle = 'normal'
        clickState.clickItalicText = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        titleInput.style.fontStyle = 'italic'
        clickState.clickItalicText = true
    }
})

leftAlign.addEventListener('click', (e) => {
    if(clickState.clickLeftAlign){
        e.target.style.backgroundColor = 'transparent'
        titleInput.style.textAlign = 'center'
        clickState.clickLeftAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        titleInput.style.textAlign = 'left'
        clickState.clickLeftAlign = true
    }
})

centerAlign.addEventListener('click', (e) => {
    if(clickState.clickCenterAlign){
        e.target.style.backgroundColor = 'transparent'
        titleInput.style.textAlign = 'center'
        clickState.clickCenterAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        titleInput.style.textAlign = 'center'
        clickState.clickCenterAlign = true
    }
})

rightAlign.addEventListener('click', (e) => {
    if(clickState.clickRightAlign){
        e.target.style.backgroundColor = 'transparent'
        titleInput.style.textAlign = 'center'
        clickState.clickRightAlign = false
    }
    else{
        e.target.style.backgroundColor = 'lightblue'
        titleInput.style.textAlign = 'right'
        clickState.clickRightAlign = true
    }
})

//nav items click state
let navItemClick = {
    clickInsertImage : false,
    clickTheme : false
}

//insert image section
insertImage.addEventListener('click', (e) => {
    if(navItemClick.clickInsertImage){
        e.target.style.textDecoration = 'none'
        let inputType = 'text'
        bodyInput.setAttribute('type', inputType)
        navItemClick.clickInsertImage = false
    }
    else{
        e.target.style.textDecoration = 'underline'
        let inputType = 'file'
        bodyInput.setAttribute('type', inputType)
        navItemClick.clickInsertImage = true
    }

    bodyInput.addEventListener('change', () => {
        const inputFile = new FileReader();
    
        inputFile.addEventListener('load', () => {
            localStorage.setItem('image', inputFile.result)
        })
    
        inputFile.readAsDataURL(bodyInput.files[0])
        slides[currentIndex - 1].imageUrl = localStorage.getItem('image')
        slides[currentIndex -1].slideImage.setAttribute('src',  localStorage.getItem('image'))
    
        slides[currentIndex -1].slideImage.style.width = "10rem"
    })
})


//handle theme click
theme.addEventListener('click', (e) => {
    if(navItemClick.clickTheme){
        e.target.style.textDecoration = 'none'
        slides[currentIndex - 1].newSlide.style.backgroundColor = '#333'
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

//change view
rightView.addEventListener('click', (e) => {
    mainContainer.style.flexDirection = 'row-reverse'
})


leftView.addEventListener('click', (e) => {
    mainContainer.style.flexDirection = 'row'
})






