#### Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized **only** if the original word was capitalized.

##### Examples

```
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
```

```javascript
/*
Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
*/
function toCamelCase(str){
    var temp = str.split(/-|_/g);
    for(var i = 1;i<temp.length;i++)
      temp[i] = temp[i].slice(0, 1).toUpperCase() + temp[i].substr(1);
    return temp.join('');
}
```

