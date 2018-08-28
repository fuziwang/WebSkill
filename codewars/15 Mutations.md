# 比较字符串

（蛤蟆可以吃队友，也可以吃对手）

如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

举例，`["hello", "Hello"]`应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。

`["hello", "hey"]`应该返回false，因为字符串"hello"并不包含字符"y"。

`["Alien", "line"]`应该返回true，因为"line"中所有字符都可以在"Alien"找到。

预期结果

```javascript
mutation(["hello", "hey"]) 应该返回 false.
mutation(["hello", "Hello"]) 应该返回 true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) 应该返回 true.
mutation(["Mary", "Army"]) 应该返回 true.
mutation(["Mary", "Aarmy"]) 应该返回 true.
mutation(["Alien", "line"]) 应该返回 true.
mutation(["floor", "for"]) 应该返回 true.
mutation(["hello", "neo"]) 应该返回 false.
```

实验代码

```javascript
function mutation(arr) {
  for(var i = 0;i<arr.length;i++){
    arr[i] = arr[i].toLowerCase();
  }
  var a = arr[0];
  var b = arr[1];
  for(var j = 0;j<b.length;j++){
    if(a.indexOf(b[j])>=0){//indexOf是判断是否是自己的子串
      continue;
    }else{
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);
```

