
// array of possible hex color values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// target span of hero element
const hero = document.getElementById('color');

// target button
const btn = document.getElementById('btn');

// create function that generates a random number
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// create random hex color by setting up loop
btn.addEventListener('click', function() {
    let hexColor = "#"
    for(var i = 0; i < 6; i++) {
        // concatenate the hash tag to the random number
        hexColor += hex[getRandomNumber()];
    }
    // set body to new hex color
    document.body.style.backgroundColor = hexColor;
    // set hero to the hex number
    hero.textContent = hexColor;
})