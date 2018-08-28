#### Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

```javascript
/*
Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
});
*/
function findShort(s){
    var temp = s.split(' ');
    var min = temp[0].length;
    for(var i = 1;i<temp.length;i++){
        if(temp[i].length < min)
          min = temp[i].length;
    }
    return min;
}
```

