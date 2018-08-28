# 检查回文字符串

如果给定的字符串是回文，返回`true`，反之，返回`false`。

如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

**注意**你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

函数参数的值可以为`"racecar"`，`"RaceCar"`和`"race CAR"`。

预期结果

```javascript
palindrome("eye") 应该返回一个布尔值
palindrome("eye") 应该返回 true.
palindrome("race car") 应该返回 true.
palindrome("not a palindrome") 应该返回 false.
palindrome("A man, a plan, a canal. Panama") 应该返回 true.
palindrome("never odd or even") 应该返回 true.
palindrome("nope") 应该返回 false.
palindrome("almostomla") 应该返回 false.
palindrome("My age is 0, 0 si ega ym.") 应该返回 true.
palindrome("1 eye for of 1 eye.") 应该返回 false.
palindrome("0_0 (: /-\ :) 0-0") 应该返回 true.
```

实际结果

```javascript
function palindrome(str) {
  var oldstr=str.replace(/[-,.,_,/,(,),\, ,:,]/g,'').toLowerCase();//toLowerCase将所有字母变小写
  var newstr = oldstr.split('').reverse().join('');// reverse是对数组操作，将数组翻转
  return oldstr == newstr;
}
palindrome("eye");
```