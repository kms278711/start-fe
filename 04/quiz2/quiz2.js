var board = document.getElementById("board");
var color = ['black', 'white'];
var str = '';
for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        if(i%2==0)  str += '<span class="'+color[j%2]+'"></span>'
        else str += '<span class="'+color[(j+1)%2]+'"></span>'
    }
    str += "<br>"
}
board.innerHTML = str;

var spans = document.querySelectorAll('span');
function reset() {
    for(var i=0; i<spans.length; i++){
       if(spans[i].className.includes("selected")) spans[i].className = spans[i].className.split(" ")[0];
    }
}

for(var i=0; i<spans.length; i++){
    spans[i].addEventListener('click', function(event){
        reset();
        event.target.className += " selected";
    })
}
