# 重复输出字符串

（重要的事情说3遍）

重复一个指定的字符串 `num`次，如果`num`是一个负数则返回一个空字符串。

预期结果

```javascript
repeat("*", 3) 应该返回 "***".
repeat("abc", 3) 应该返回 "abcabcabc".
repeat("abc", 4) 应该返回 "abcabcabcabc".
repeat("abc", 1) 应该返回 "abc".
repeat("*", 8) 应该返回 "********".
repeat("abc", -2) 应该返回 "".
```

实现代码

```javascript
function repeat(str, num) {
  if(num<0){
    str = '';
  }
  else{
    var a = str;
    str = '';
    for(var i = 0;i<num;i++){
      str = str + a;
    }
  }
  return str;
}
repeat("abc", 3);
```

