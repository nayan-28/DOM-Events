const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'Green';
}

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'Purple';
}

function makeRed() {
    document.body.style.backgroundColor = 'Red';
}

const pinkButton = document.getElementById('make-pink');

pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'Pink';
}


const tomatoButton = document.getElementById('make-tomato');
tomatoButton.addEventListener('click', function makeTomato() {
    document.body.style.backgroundColor = 'Tomato';
})


/*Most useful*/

document.getElementById('make-orange').addEventListener('click', function() {
    document.body.style.backgroundColor = 'Orange';
})
