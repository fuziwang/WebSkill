# 截断数组

返回一个数组被截断`n`个元素后还剩余的元素，截断从索引0开始。

预期结果

```javascript
slasher([1, 2, 3], 2) 应该返回 [3].
slasher([1, 2, 3], 0) 应该返回 [1, 2, 3].
slasher([1, 2, 3], 9) 应该返回 [].
slasher([1, 2, 3], 4) 应该返回 [].
slasher(["burgers", "fries", "shake"], 1) 应该返回 ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) 应该返回 ["cheese", 4].
```

实现代码

补充说明，splice方法

**splice()**方法通过删除现有元素和/或添加新元素来更改一个数组的内容。

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish.splice(2, 0, 'drum'); // 在索引为2的位置插入'drum'
// myFish 变为 ["angel", "clown", "drum", "mandarin", "sturgeon"]
myFish.splice(2, 1); // 从索引为2的位置删除一项（也就是'drum'这一项）
// myFish 变为 ["angel", "clown", "mandarin", "sturgeon"]
```

```javascript
function slasher(arr, howMany) {
  if(arr.length<=howMany){
    arr = [];
  }
  else{
    arr.splice(0,howMany);// 从0个位置开始截断howMany个元素 
  }
  return arr;
}
slasher([1, 2, 3], 2);
```

