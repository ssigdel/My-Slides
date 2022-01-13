let state = {
    dark: false
}

darkTheme.addEventListener('click', () => {
    if(!state.dark){
        darkTheme.innerText = 'Light Theme'
        body.style.backgroundColor = '#333'
        darkTheme.style.backgroundColor = "white"
        darkTheme.style.color = 'black'
        heading.style.color = 'lightblue'
        changeDisplay.style.color = 'white'

        for(let i = 0; i < list.length; i++){
            list[i].style.color = 'white'
        }

        state.dark = true
    }
    else{
        darkTheme.innerText = 'Dark Theme'
        body.style.backgroundColor = '#fafafa'
        darkTheme.style.backgroundColor = "#333"
        darkTheme.style.color = 'white'
        heading.style.color = '#181e4b'
        changeDisplay.style.color = 'black'
        
        for(let i = 0; i < list.length; i++){
            list[i].style.color = 'black'
        }

        state.dark = false
    }
})