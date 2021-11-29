const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hex color has following code #f15025 ( numbers from 0 to 9 and letters from A to F)
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
let hexColor = '#';
for (let i = 0; i<6; i++){
    hexColor += hex[getRandomNumber()];
}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}