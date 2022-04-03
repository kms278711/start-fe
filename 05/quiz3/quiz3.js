var $addRed = document.querySelector('.add-red');
var $addBtn = document.querySelector('.add-btn');
var $delBtn = document.querySelector('.delete-btn');
var $textBtn = document.querySelector('.text-btn');
var $resetBtn = document.querySelector('.reset-btn');
var $toggleBtn = document.querySelector('.toggle-btn');
var $imageBtn = document.querySelector('.image-btn');
var isRed = false;
var isHide = false;

function addRed() {
    var boxs = document.querySelectorAll('.box');
    if(isRed) {
        boxs.forEach(function($box){
            $box.className = $box.className.split(' ')[0];
        })
        isRed = false;
    } else {
        boxs.forEach(function($box){
            $box.className = $box.className + ' red';
        })
        isRed = true;
    }
    
}

function addBtn() {
    var div = document.createElement("div");
    div.className = 'box';
    if(isRed){
        div.className = div.className + ' red';
    }
    document.body.appendChild(div);
}

function delBtn() {
    var boxs = document.querySelectorAll('.box');
    var delBox = boxs[boxs.length-1];
    document.body.removeChild(delBox);
}

function textBtn() {
    var boxs = document.querySelectorAll('.box');
    boxs.forEach(function($box){
        var text = document.createTextNode(document.querySelector('.txt').value);
        $box.appendChild(text);
    })
}

function resetBtn() {
    var boxs = document.querySelectorAll('.box');
    for(var i=0; i<boxs.length; i++){
        document.body.removeChild(boxs[i]);
    } 
}

function toggleBtn() {
    var boxs = document.querySelectorAll('.box');
    if(isHide){
        boxs.forEach(function($box){
            $box.style.visibility = "visible";
        })
        isHide = false;
    } else {
        boxs.forEach(function($box){
            $box.style.visibility = "hidden";
        })
        isHide = true;
    }
    
}

function imageBtn() {
    var $box = document.querySelector('.box');
    if(!$box){
        addBtn();
        var $box = document.querySelector('.box');
    }
    var src = 'https://i.imgur.com/69NjYBH.png';
    var str = '<img src=' + src + '>';
    $box.innerHTML = str;
}

function init() {
    $addRed.addEventListener('click', addRed);
    $addBtn.addEventListener('click', addBtn);
    $delBtn.addEventListener('click', delBtn);
    $textBtn.addEventListener('click', textBtn);
    $resetBtn.addEventListener('click', resetBtn);
    $toggleBtn.addEventListener('click', toggleBtn);
    $imageBtn.addEventListener('click', imageBtn);
}

init();