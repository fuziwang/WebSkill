# 摧毁数组

**金克斯的迫击炮！**

实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。

预期结果

```javascript
destroyer([1, 2, 3, 1, 2, 3], 2, 3) 应该返回 [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) 应该返回 [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) 应该返回 [1].
destroyer([2, 3, 2, 3], 2, 3) 应该返回 [].
destroyer(["tree", "hamburger", 53], "tree", 53) 应该返回 ["hamburger"].
```

实现代码

```javascript
function destroyer(arr) {
  var array = arguments;
  function isfilter(value){ // 这里一定要注意作用域的问题
    for(var i = 1;i<array.length;i++){
      if(value == array[i]){
        return value != array[i];
      }else{
        continue;
      }
    }
    return true;
  }
  arr = arr.filter(isfilter);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

