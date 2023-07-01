let count = 34
let counter = document.querySelector('#counter-section')
let counterUpButton = document.querySelector('#count-up-button')
let counterDownButton = document.querySelector('#count-down-button')

const counterHandle = () => {
    counterUpButton.addEventListener('click', countUp)
    counterDownButton.addEventListener('click', countDown)
}

const countUp = () => {
    count = count + 1
    counter.innerText = count
}

const countDown = () => {
    count = count - 1
    counter.innerText = count
}

counterHandle()