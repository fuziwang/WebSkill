#### Find the odd int

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

```javascript
/*
Test.describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});
*/
function findOdd(A) {
  for(var i = 0;i<A.length;i++){
      var count = 0;
      for(var j = 0;j<A.length;j++){
        if(A[j] == A[i])
          count ++;
      }
      if(count %2!=0)
          return A[i];
  }
}
```

