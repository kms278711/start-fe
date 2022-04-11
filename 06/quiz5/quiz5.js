let isMouse = false;
let offset = { x: 0, y: 0 };
let $box = null;
const boxs = document.querySelectorAll('.box');


function mouseDown(event) {
    $box = event.target; 
    isMouse = true;
    offset.x = $box.offsetLeft - event.clientX; // 박스의 현재 left 길이에서, 마우스의 x 좌표를 빼주기
    offset.y = $box.offsetTop - event.clientY;
}

function mouseMove(event) {
    if(!isMouse) return;
    $box.style.left = event.clientX + offset.x + 'px';
    $box.style.top = event.clientY + offset.y + 'px';
}

function mouseUp(event) {
    isMouse = false;
}

for(let i=0; i<boxs.length; i++){
    boxs[i].addEventListener('mousedown', mouseDown);
    document.body.addEventListener('mousemove', mouseMove);
    boxs[i].addEventListener('mouseup', mouseUp);
}
