// var name = "kms";
// name= "111";
// console.log(name);


// debugger
// function log(str) {
//     console.log(str);
// }

// log("hello");

// //object
// var img = {};
// img.width = 100;
// img.height = 200;
// console.log(img);

// //배열

// var arr = [1,2,3,4,5];
// console.log(arr);

// console.log(1+"1");
// console.log(name+"hello");


// var me = {
//     age : 25,
//     name : 'kms',
//     isMan: true,
//     sayHello: function(){
//         console.log('hello');
//     },
// };

// me.sayHello();

// var arr = [1,2,3,4,5];
// console.log(arr.length);

// var article1 = {
//     title: '제목1',
//     url: 'http://naver.com',
// };

// var articles = [article1];
// console.log(articles);

var todos = ['운동'];

var todo = '게임';
todos.push(todo);

// console.log(todos);

todos.forEach(function(todo){
    console.log(todo);
});

var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todos){
    return todo === updateTodo;
});
console.log(updateIndex);


var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(todo) {
  return todo !== deleteTodo;
});
console.log(newTodos);