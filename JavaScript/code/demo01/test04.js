// 字符串
'I\'m \"OK\"!';
"I'm OK";

console.log(`多行
字符串
测试`);

var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
alert(message);

var name = '小明';
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`;
alert(message);

// 字符串操作
var s = 'Hello, world!';
s.length; // 13

var s = 'Hello, world!';

s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined

var s = 'Test';
s[0] = 'X';
alert(s); // s仍然为'Test'

var s = 'Hello';
s.toUpperCase(); // 返回'HELLO'

var s = 'Hello';
var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
console.log(lower); // 'hello'

var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1

var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'