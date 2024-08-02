chooseRandom()

function chooseRandom() {
    let images = document.getElementsByClassName("title-image")

    let image = images[Math.floor(Math.random() * images.length)]
    image.style = "opacity: 1"
}