const screen = document.querySelector('#screen')
const keys = document.querySelectorAll('.key')
const equal = document.querySelector('.equal')
const del = document.querySelector('.del')
const reset = document.querySelector('.reset')

keys.forEach(key => {
    key.addEventListener('click', () => {
        screen.value += key.value
    })
})

del.onclick = () => {
    screen.value = screen.value.slice(0, -1)
}

reset.onclick = () => {
    screen.value = ''
}

equal.onclick = () => {
    screen.value = eval(screen.value)
}