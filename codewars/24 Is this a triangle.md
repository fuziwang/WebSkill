#### Is this a triangle?

Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

```JavaScript
function isTriangle(a,b,c)
{
   if(a>b)
   {
      var temp = a;
      a = b;
      b = temp;
   }
   if(b>c)
   {
      temp = b;
      b = c;
      c = temp;
   }
   if(a>c)
   {
      temp = a;
      a = c;
      c = temp;
   }
   if((a+b>c) && (c-b<a))
      return true;
   return false;
}
// code perfect
function isTriangle(a, b, c) {
   return (a + b > c) && (a + c > b) && (b + c > a);
}
```