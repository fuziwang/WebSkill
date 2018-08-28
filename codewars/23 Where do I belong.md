# 数组排序并找出元素索引

**我身在何处？**

先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。

举例：`where([1,2,3,4], 1.5)` 应该返回 `1`。因为`1.5`插入到数组`[1,2,3,4]`后变成`[1,1.5,2,3,4]`，而`1.5`对应的索引值就是`1`。

同理，`where([20,3,5], 19)` 应该返回 `2`。因为数组会先排序为 `[3,5,20]`，`19`插入到数组`[3,5,20]`后变成`[3,5,19,20]`，而`19`对应的索引值就是`2`。

预期结果

```javascript
where([10, 20, 30, 40, 50], 35) 应该返回 3.
where([10, 20, 30, 40, 50], 30) 应该返回 2.
where([40, 60], 50) 应该返回 1.
where([3, 10, 5], 3) 应该返回 0.
where([5, 3, 20, 3], 5) 应该返回 2.
where([2, 20, 10], 19) 应该返回 2.
where([2, 5, 10], 15) 应该返回 3.
```

实现代码

```javascript
function where(arr, num) {
  //arr = arr.sort();//给原来的代码进行排序,由于是不稳定的，多以放弃
  for(var i = 0;i<arr.length;i++){
    for(var j = 0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  if(num>arr[arr.length-1]){
    num = arr.length;
    return num;
  }
  for(i = 0;i<arr.length;i++){
    if(num<=arr[i]){
      num = i;
      break;
    }
  }
  
  return num;
}
where([40, 60], 50);
```

