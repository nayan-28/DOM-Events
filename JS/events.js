const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'Green';
}

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'Purple';
}
