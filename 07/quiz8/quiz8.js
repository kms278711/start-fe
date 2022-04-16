let num = 0;
let numStart = 0;
let min = 0;
let max = 0;
let interval = null;
const $btn = document.getElementById('btn');
const $box = document.getElementById('box');


function displayNum() {
    numStart ++;
    $box.innerHTML = numStart;
    if(numStart == num) {
        clearInterval(interval);
        $btn.disabled = false;
    }
}

function checkNum() {
    if(isNaN(max) || isNaN(min)) { 
        alert('숫자를 입력해주세요.');
        return false;
    } else if(max < min){
        alert('최소값이 최대값보다 큽니다.');
        return false;
    } else {
        return true;
    }
}

$btn.addEventListener('click', () => {
    min = parseInt(document.getElementById('min').value);
    max = parseInt(document.getElementById('max').value);
    if(checkNum()){
        $btn.disabled = true;
        num = Math.ceil(Math.random() * (max - min) + min); 
        numStart = num - 30;
        interval = setInterval(displayNum , 50);
    } 
});
