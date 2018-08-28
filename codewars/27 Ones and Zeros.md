#### Ones and Zeros

Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

Examples:

```javascript
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```

Note: you shouldn't mutate the input

```javascript
const binaryArrayToNumber = arr => {
  // your code
  var j = 0;
  var sum = 0;
  for(var i = arr.length-1;i>=0;i--)
  {
      sum += arr[i]*Math.pow(2,j);
      j++;
  }
  return sum;
};
// code perfect
// Number.parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};
```

