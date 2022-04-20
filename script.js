let buffer = 0;
const screen = document.querySelector('.display');

document.querySelector('.calc').addEventListener('click', function(event) {
    buffer = event.target.innerText;
    if (screen.innerHTML === '0') {
        screen.innerHTML = buffer;
    }
    else {
        screen.innerHTML += buffer
    }
});

