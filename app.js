const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click', function(){
    //get random number between 0-3 colors[3]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    //Floor is used to round down to nearest integer 
    return Math.floor(Math.random() * colors.length);
}
