//image input by drag and drop
const handleImage = (image) => {

    const imageReader = new FileReader()

    imageReader.addEventListener('load', (e) => {
        slides[currentIndex - 1].imageUrl = imageReader.result
        slides[currentIndex - 1].slideImage.src = imageReader.result
        localStorage.setItem('slides', JSON.stringify(slides))
    })
    imageReader.readAsDataURL(image)
}

const dropImage = (e) => {
    e.stopPropagation()
    e.preventDefault()

    const data = e.dataTransfer;
    const files = data.files;
    const image = files[0]

    handleImage(image)
}

imageUpload.addEventListener('dragenter',  (e) => {
    e.stopPropagation()
    e.preventDefault()
})

imageUpload.addEventListener('dragover',  (e) => {
    e.stopPropagation()
    e.preventDefault()
})

imageUpload.addEventListener('drop', dropImage)


