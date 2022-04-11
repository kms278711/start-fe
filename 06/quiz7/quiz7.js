const $bug = document.getElementById('bug');
const $box = document.querySelector('.box');
const $point = document.getElementById('point');
const $life = document.getElementById('life');

const XRange = {
    start : $box.offsetLeft,
    end : $box.offsetLeft + $box.offsetWidth - $bug.offsetWidth,
}
const YRange = {
    start : $box.offsetTop,
    end : $box.offsetTop + $box.offsetHeight - $bug.offsetHeight,
}
let x = 0;
let y = 0;

function random() {
    x = Math.random() * (XRange.end - XRange.start);
    y = Math.random() * (YRange.end - YRange.start);
    $bug.style.left = `${x}px`;
    $bug.style.top = `${y}px`;
}

$bug.addEventListener('click', (event) => {
    event.stopPropagation();
    isBug = true;
    random();
    clearInterval(interval);
    interval = setInterval(random , 3000);
    $point.innerHTML = parseInt($point.innerHTML) + 1;
});

$box.addEventListener('click', () => {
    $life.innerHTML = parseInt($life.innerHTML) - 1;
    if($life.innerHTML == 0) {
        alert('gameover')
        clearInterval(interval);
    }
})

let interval = setInterval(random , 3000);