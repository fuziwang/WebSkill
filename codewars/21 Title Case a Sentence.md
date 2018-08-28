# 句中单词首字母大写

确保字符串的每个单词首字母都大写，其余部分小写。

像'the'和'of'这样的连接符同理。

预期结果

```javascript
titleCase("I'm a little tea pot") 应该返回一个字符串
titleCase("I'm a little tea pot") 应该返回 "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") 应该返回 "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") 应该返回 "Here Is My Handle Here Is My Spout".
```

实际结果

```javascript
function titleCase(str) {
  //先将字符串都变成小写，然后在转换成数组，将数组的首字母大写
  str = str.toLowerCase();
  var arr = str.split(' ');
  for(var i = 0;i<arr.length;i++){
    var a = arr[i].slice(0, 1).toUpperCase();// slice是选取的是第一个字符
    arr[i] = a + arr[i].substr(1);//substr(1)选取的是第一个字符及其以后的字符
  }
  str = arr.join(' ');
  return str;
}
titleCase("I'm a little tea pot");
```

