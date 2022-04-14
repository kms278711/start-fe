const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const bugWidth = $bug.offsetWidth;
const bugHeight = $bug.offsetHeight;
const boxWidth = 400 - bugWidth;
const boxHeight = 400 - bugHeight;
const bugSpeed = 2000;
let point = 0;
let life = 10;
let intervalID = 0;

function getRandomNumber(max) {
    return Math.floor(Math.random * max);
}

function moveBug() {
    const x = getRandomNumber(boxWidth);
    const y = getRandomNumber(boxHeight);
    $bug.style.left = `${x}px`; 
    $bug.style.top = `${y}px`;
}

function startBug() {
    $bug.style.display = 'block';
    clearInterval(intervalID);
    intervalID = setInterval(moveBug(), bugSpeed);
}

function hitBug(event) {
    point ++;
    $point.innerHTML = point;
    $bug.style.display = 'none';
    clearInterval(intervalID);
    event.stopPropagation();
}

function minusLife() {
    life--;
    $life.innerHTML = life;
    if(life===0)
        alert('Game over');
}
$bug.addEventListener('click', hitBug);
$box.addEventListener('click', minusLife);