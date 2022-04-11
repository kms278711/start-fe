const $box = document.getElementById('box');

let offset = { x: 0, y: 0 };
let isDown = false;

$box.addEventListener('mousedown', (event) => {
  isDown = true;
  offset.x = $box.offsetLeft - event.clientX; // 박스의 현재 left 길이에서, 마우스의 x 좌표를 빼주기
  offset.y = $box.offsetTop - event.clientY;
});

document.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  $box.style.left = event.clientX + offset.x + 'px';
  $box.style.top = event.clientY + offset.y + 'px';
});

$box.addEventListener('mouseup', (event) => {
  isDown = false;
});

