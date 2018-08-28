# 找出最长单词

在句子中找出最长的单词，并返回它的长度。

函数的返回值应该是一个数字。

预期结果

```javascript
findLongestWord("The quick brown fox jumped over the lazy dog") 应该返回一个数字
findLongestWord("The quick brown fox jumped over the lazy dog") 应该返回 6.
findLongestWord("May the force be with you") 应该返回 5.
findLongestWord("Google do a barrel roll") 应该返回 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") 应该返回 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") 应该返回 19.
```

实际结果

```javascript
function findLongestWord(str) {
  // 先转换成数组，之后将数组中找出数组元素的长度最长的，并将其返回
  var arr = str.split(' ');
  var temp = arr[0];
  for(var i = 1;i<arr.length;i++){
    if(arr[i].length>temp.length){
      temp = arr[i];
    }
  }
  str = temp;
  return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
```

