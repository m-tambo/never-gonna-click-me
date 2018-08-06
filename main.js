let box = document.querySelector('#target-box')

box.style.position = "absolute"

box.addEventListener('click', () => console.log('clicked it'))
box.addEventListener('mouseover', () => setRandomPosition(box))

const setRandomPosition = (thing) => {
    let width = window.innerWidth
    let height = window.innerHeight

    thing.style.top = randomNumGenerator(20, height - 80) + 'px'
    thing.style.left = randomNumGenerator(60, width - 60) + 'px'
}

const randomNumGenerator = (min, max) => {
    return Math.random() * (max - min) + min
}

