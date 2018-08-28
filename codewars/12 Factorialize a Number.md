# 计算一个整数的阶乘

如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。

阶乘通常简写成 `n!`

例如: `5! = 1 * 2 * 3 * 4 * 5 = 120`

预期结果

```javascript
factorialize(5) 应该返回一个数字
factorialize(5) 应该返回 120.
factorialize(10) 应该返回 3628800.
factorialize(20) 应该返回 2432902008176640000.
factorialize(0) 应该返回 1.
```

实现代码

```javascript
function factorialize(num) {
  var n = num;
  num = 1;
  for(var i = 1;i<=n;i++){
    num*=i;
  }
  return num;
}
factorialize(5);
```

