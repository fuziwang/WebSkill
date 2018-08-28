# 翻转字符串

先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。

你的结果必须得是一个字符串

预期结果

```javascript
reverseString("hello") 应该返回一个字符串
reverseString("hello") 应该返回 "olleh".
reverseString("Howdy") 应该返回 "ydwoH".
reverseString("Greetings from Earth") 应该返回 "htraE morf sgniteerG".
```

实现代码

```javascript
function reverseString(str) {
  var arr = str.split('');// split是将字符串转换成数组
  arr = arr.reverse();// 将数组进行翻转
  str = arr.join('');// join是将数组转换为字符串
  return str;
}
reverseString("hello");
```



