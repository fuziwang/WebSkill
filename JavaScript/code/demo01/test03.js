// number
console.log(123); // 整数123
console.log(0.456); // 浮点数0.456
console.log(1.2345e3); // 科学计数法表示1.2345x1000，等同于1234.5
console.log(-99); // 负数
console.log(NaN); // NaN表示Not a Number，当无法计算结果时用NaN表示
console.log(Infinity); // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity

// string
'hello world';
"hello world";

// bollean
true; // 这是一个true值
false; // 这是一个false值
2 > 1; // 这是一个true值
2 >= 3; // 这是一个false值

// 逻辑运算符
true && true; // 这个&&语句计算结果为true
true && false; // 这个&&语句计算结果为false
false && true && false; // 这个&&语句计算结果为false
2 && 3; // 这个&&语句计算结果为3
0 && 3; // 这个&&语句计算结果为0

false || false; // 这个||语句计算结果为false
true || false; // 这个||语句计算结果为true
false || true || false; // 这个||语句计算结果为true
2 || 3; // 这个||语句计算结果为2
0 || 3; // 这个||语句计算结果为3

!true; // 结果为false
!false; // 结果为true
!(2 > 5); // 结果为true

// 比较运算符
2 > 5; // false
5 >= 2; // true
7 == 7; // true
false == 0; // true
false === 0; // false
NaN === NaN; // false
1 / 3 === (1 - 2 / 3); // false

// array
var array = [1, 2, 3.14, 'Hello', null, true];
var arr = new Array(1, 2, 3); // 创建了数组[1, 2, 3]

// object
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

// 变量
var a; // 申明了变量a，此时a的值为undefined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null