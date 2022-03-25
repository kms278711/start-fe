console.log('03');

// var foo = 42;
// var foo = "bar";
// var foo = true;

// if("test"){
//     console.log("true");
// }


// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a,b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;

// console.log(a,b);

//call by value

// function byValue(count) {
//     count = count + 2;
// }
// var count = 3;
// byValue(count);
// console.log(count);

//call by reference
// function byReference(count){
//     count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count);

// var isMan = true;
// var gender ='';
// if(isMan){
//     gender = '남자';
// } else {
//     gender = '여자';
// }

// function log(str) {
//    return str;
// }

// console.log(result);

// var isDelelte = confirm('삭제하시겠습니까?');
// if(isDelete){
//     // .....  더 좋은 코드!
// }

// if(confirm('삭제하시겠습니까?')){
//     // .....
// }

// function test(){
//     console.log("test");
// }

// // var id = setTimeout(test, 1000);
// var id = setInterval(test, 1000);

// var nick = 'aji';

// function test() {
//     var age = 30;
//     console.log(nick, age);
// }

// test();
// console.log(age);

// (function() {
//     //
// })();

// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
// }
// sum(3);

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /abc/; //d 찾을 문자열
// var result = testReg.test(text);

// console.log(result); // true

// var todos = ['운동'];
// function create(todo) {
//     todos.push(todo);
//     console.log(todos);
// }

// function read(todos){
//     todos.forEach(function(todo){
//         console.log(todo);
//     });
// }

// function update(updateTodo, updateTodoAfter){
//     var updateIndex = todos.findIndex(function(todo) {
//         return todo === updateTodo
//     });
//     todos[updateIndex] = updateTodoAfter;
//     console.log(todos);
// }

// function eliminate(deleteTodo){
//     var deleteIndex = todos.findIndex(function(todo){
//         return todo === deleteTodo;
//     });
//     todos.splice(deleteIndex, 1);
//     console.log(todos);
// }