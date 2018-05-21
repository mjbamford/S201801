// let button = document.querySelector('button')
let cb = function(event) {
    console.dir(event)
    alert(`You pressed button ${event.target.innerText}`)
}

let button = document.getElementById('button_1')
button.addEventListener('click', cb) 

button = document.getElementById('button_2')
button.addEventListener('click', cb)