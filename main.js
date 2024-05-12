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
    if(screen.value === 'Error') {
        screen.value = 'Error'
    }
    else if(screen.value === ''){
        screen.value = ''
    }
    else{
        try{
            screen.value = eval(screen.value)
        }
        catch(error){
            screen.value = 'Error'
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Proveri da li je tema sačuvana u Local Storage
    const savedTheme = localStorage.getItem("theme");

    // Ako je tema sačuvana, primeni je na stranicu
    if (savedTheme) {
        main.classList = savedTheme
        radios.forEach(radio => {
            if(radio.value === savedTheme){
                radio.checked = true
            }
        })
    }
})
radios.forEach(radio => {   
    radio.addEventListener('click', () => {

    const savedTheme = localStorage.getItem("theme")

    if (savedTheme !== radio.value) {
        localStorage.setItem("theme", radio.value);
        const theme = radio.value
        main.classList = theme
    }
    })
})