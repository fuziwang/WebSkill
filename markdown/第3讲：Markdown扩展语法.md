## markdow扩展语法

### 水平标尺

	一般来说用***或者+++或者---来进行分隔的就是水平标尺

例如：

---
- - -
***
* * * ​

### 表格
	一般来说用
	|时间|地点|事件|
	|---|：---：|---：|(注意这里的都是英文)
	或者采取另一种方式
	时间|地点|事件
	---|：---：|---：(注意这里的都是英文)

| Name             |  Academy   | score |
| ---------------- | :--------: | ----: |
| Harry Potter     | Gryffindor |    90 |
| Hermione Granger | Gryffindor |   100 |
| Draco Malfoy     | Slytherin  |    90 |

### 引用

	一般来说用> 表示一个引用，引用是可以进行嵌套使用的。

例如：  
> 这是一个引用

### 代码块

	用```（代码）```包裹的内容表示这是一个代码块，或者用tab键也可以进行标记

例如：  
```JavaScript
var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
   li[i].onmouseover = function() {
       this.className = 'a';
   }
   li[i].onmouseout = function() {
       this.className = '';
   }
}
```

掌握以上内容，基本上markdown的语法也就掌握了。

