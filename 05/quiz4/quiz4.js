var $box = document.getElementById('box');

function boxDrag(ele) {
    var x1 = 0;
    var x2 = 0;
    var y1 = 0;
    var y2 = 0;

    function boxDown(e) {
        x1 = e.clientX;
        y1 = e.clientY;
        document.addEventListener('mousemove', boxMove);
        document.addEventListener('mouseup', boxUp);
    }

    function boxMove(e) {
        x2 = x1 - e.clientX;
        y2 = y1 - e.clientY;
        x1 = e.clientX;
        y1 = e.clientY;
        ele.style.left = ele.offsetLeft - x2 + 'px'; //모르겠음.
        ele.style.top = ele.offsetTop - y2 + 'px'; //모르겠음.
    }

    function boxUp() {
        document.removeEventListener('mouseup', boxUp);
        document.removeEventListener('mousemove', boxMove);
    }

    ele.addEventListener('mousedown', boxDown);
}

boxDrag($box);