const $btn = document.getElementById('btn');
const $result = document.getElementById('result');
const $num = document.getElementById('num');
let str = '';
    
$btn.addEventListener('click', () => {
    if(num.value=='') {
        alert('숫자를 입력해주세요.')
        return;
    }
    str = '';
    for(let i=1; i<10; i++){
        str += `${$num.value} x ${i} = ${$num.value*i}<br>`;
    }
    $result.innerHTML = str;
})