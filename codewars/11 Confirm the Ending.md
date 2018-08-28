# 检查字符串结尾

判断一个字符串(`str`)是否以指定的字符串(`target`)结尾。

如果是，返回true;如果不是，返回false。

预期结果

```javascript
confirmEnding("Bastian", "n") 应该返回 true.
confirmEnding("Connor", "n") 应该返回 false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") 应该返回 false.
confirmEnding("He has to give me a new name", "name") 应该返回 true.
confirmEnding("He has to give me a new name", "me") 应该返回 true.
confirmEnding("He has to give me a new name", "na") 应该返回 false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") 应该返回 false.
```

实现代码

```javascript
function confirmEnding(str, target) {
  if(target === str.substr(str.length-target.length)){
    return true;
  }
  else{return false;}
}
confirmEnding("Bastian", "n");
```

