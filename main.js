const screen = document.querySelector('#screen')
const keys = document.querySelectorAll('.key')
const equal = document.querySelector('.equal')
const del = document.querySelector('.del')
const reset = document.querySelector('.reset')
const radios = document.querySelectorAll('.radio')
const main = document.querySelector('main')

keys.forEach(key => {
    key.addEventListener('click', () => {
        if(screen.value === 'Error') {
            screen.value = key.value
        }
        else{
            screen.value += key.value
        }
        
    })
})

del.onclick = () => {
    if(screen.value === 'Error') {
        screen.value = ''
    }
    else{
        screen.value = screen.value.slice(0, -1)
    }
}

reset.onclick = () => {
    screen.value = ''
}

equal.onclick = () => {
    try{
        screen.value = eval(screen.value)
    }
    catch(error){
        screen.value = 'Error'
    }
}

radios.forEach(radio => {   
    radio.addEventListener('click', () => {
        const theme = radio.value
        main.classList = theme
    })
})