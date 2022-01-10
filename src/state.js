let screenState = {
    homeScreen : true,
    slideScreen: false
}

if(screenState.homeScreen){
    mainSection.style.display = 'none'
    leftSection.style.display = 'none'
    navBar.style.display = 'none'
    presentButton.style.display= 'none'
    header.style.borderBottom = '0'
}

blankSlide.addEventListener('click', (e) => {
    screenState.homeScreen = false
    screenState.slideScreen = true

    if(screenState.slideScreen){
        blankSlide.style.display = 'none'
        mainSection.style.display = 'flex'
        leftSection.style.display = 'block'
        navBar.style.display = 'flex'
        presentButton.style.display= 'block'
        header.style.borderBottom = '1px solid #999'
    }
})

