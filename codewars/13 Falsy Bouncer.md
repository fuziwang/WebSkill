# 过滤数组假值

（真假美猴王）

删除数组中的所有假值。

在JavaScript中，假值有`false`、`null`、`0`、`""`、`undefined` 和 `NaN`。

`filter() `方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

```javascript
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
```

预期结果

```javascript
bouncer([7, "ate", "", false, 9]) 应该返回 [7, "ate", 9].
bouncer(["a", "b", "c"]) 应该返回 ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) 应该返回 [].
bouncer([1, null, NaN, 2, undefined]) 应该返回 [1, 2].
```

实现代码

```javascript
function bouncer(arr) {
  function isfilter(value){
    return Boolean(value) !== false;
  }
  arr = arr.filter(isfilter);
  return arr;
}
bouncer([7, "ate", "", false, 9]);
```

