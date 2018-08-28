#### Loading Kata: Format a string of names like 'Bart, Lisa & Maggie'.

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

```JavaScript
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
```

**Note:** all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

```javascript
/*
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
Test.assertEquals(list([]), '', "Must work with no names")
*/
function list(names){
    if(names.length == 0) return '';
    var str = names[0].name;
    for(var i = 1;i<names.length;i++){
        if(i!=names.length-1)
            str = str + ', ' + names[i].name;
        else
            str = str + ' & ' + names[i].name;
    }
    return str;
}
```

