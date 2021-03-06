# 数据类型

## null(空值)

null即变量没有存储任何数据，将一个变量赋值为null等于删除这个变量


## boolean(逻辑布尔值)

有两个值，true表示真、 false 表示假。通常用在条件表达式中。
通俗一点说，true表示是、符合条件，false表示不是、不符合条件。

在条件表达式(恒等式除外)中， null、数值0这认为是false，
其他有效的数据都被认为是true。

::: tip
与C++类似，aardio认为0为false，非零数值为true，在外部api函数中可以保持一致。
:::

在 aardio 中如果一个函数说明应该返回布尔值（true 或 false ），但是实际允许返回任意类型的值 - 不会再额外说明。 任意类型的值可按上述规则自动转换为布尔值使用，不再额外作出说明。 如果一个函数返回值的用途被描述为“是否 ……” 或相同语义的类似说明，即说明该函数应该返回一个布尔值，不再额外作出说明。

## number(数值)

aardio中的数值为64位双精度浮点数，数值类型可以使用不同的进制来表示，参考：数值与进制
使用0x前缀表示十六进制数，例：num = 0xA1 + 0xFF，而使用2#前缀可以表示2进制数，使用8#前缀可以表示8进制数。也可以用科学计算法表示数值 num = 6e+20


> 把一个大于10的数写成a * 10n 的形式，其中a称为尾数、n称为指数，是整数数位只有一位的数，这种计数法叫做科学计数法，也叫10的幂计数法。例如 x= -3.5×105 这里最前面有一个负号，3.5是尾数，两个有效数字，后面以10为基数的指数为5。我们可以将它表示为-3.5E5。



数值的字面值允许加入下划线作为数值分隔符，
例如 123\_456 等价于 123456， 2#1010\_1100 等价于 2#10101100，
数值分隔符不能使用连续多个下划线，并且不能在字符串中使用数值分隔符，例如:

```js :no-line-numbers
tonumber("123_456") // 返回的是123
("123456") + 1 // 返回的是一个数值 123457
("123_456") + 1 // 会报错
```



## string(字符串)

计算机中以八个二进制位表示一个八位字节 - 这称为一个单字节字符。
一组连续的字节就构成一个字符串，在aardio中字符串是基于二进制的，可以包含任何数据（例如图像、文本、或者'\0'等不可打印字符）。

字符串本质上是字节构成的数组，但这个数组是只读的，每次对字符串做替换、连接等操作都会生成新的字符串，
每个字符串指向的内存不应该被直接修改。
 
下面的代码定义了一个最基本的字符串：
```js :no-line-numbers
var str ="C:\Documents and Settings\admin\Desktop\string.aardio" 
```

可以用 #str 取该字符串占用的内存字节长度，可以使用下标获取每个字节的数值，
例如 str[1] 取出第一个字节的数值是67, 内存中的67在文本中显示出来的就是字符"C" - 这是ASCII编码规定的。

前面说过，一个字节只有8个二进制位，那他能表示的字符就很有限，所以就有了很多不同的编码规则用多个字节
来表示更多的字符，例如GBK,UTF-8等多字节字符集，用小于0x80的单字节表示ASCII字符（英文字母数字这些），
GBK用双字节表示汉字（首字符大于0x80)，而UTF8有两个以上的字节表示宽字符（所有字节大于0x7F).

GBK编码的第二个字节还是会与ASCII冲突，所以处理GBK字符串需要从头开始才能准确的检测一个字节属于谁，
这导致容易出现串码问题，而UTF8的宽字符总是大于0x7F，首字符的两个二进制位总是1,而附加字节的前两个
二进制位总是10，这就让我们处理文本非常方便，因为格式化的文本，例如HTML,JSON他的分隔标记通常都是
固定小于0x7F的ASCII字符，但要注意UTF8的字符是变长的，理论一个字符可以是1，2，3，4 .....个字节。
 
不同的编码还存在不同的系统环境不兼容的问题，例如GBK的软件在繁体系统上就会乱码，而Unicode编码可以
避免这一问题，Unicode编码有多种方案，主要被采用的则是UTF-8,UTF-16。 windows系统使用的是UTF-16,
而 aardio 10开始，aardio的源代码文件、字符串等等默认使用UTF-8编码。
 
注意在aardio文档中一般提到Unicode指的是UTF 16.
例如 string.fromUnicode() string.toUnicode() 函数默认都是从UTF-8到 UTF-16(Unicode)双向转换。

#### 文本字符串

文本字符串放在双引号中，字符串可以包含换行，aardio保证双引号中的字符串换行使用'\n'换行符,不包含'\r'回车符。

例如：

```js :no-line-numbers
strPath ="C:\Documents and Settings\admin\Desktop\string.aardio" 
strLine ="第一行 第二行"
```

如果在双引号中的字符串本身包含双引号，可以用两个连续的双引号表示双引号自身。

另外在 aardio 10中，可以使用反引号（键盘左上角ESC下方的键）代替双引号，他们的作用与用法相同，例如：

```js :no-line-numbers
strPath = `C:\Documents and Settings\admin\Desktop\string.aardio` 
strLine = `第一行 第二行`
```

aardio代码中双引号、反引号内的都是纯文本字符串，并被aardio标记为UTF-8编码。
aardio中每个字符串都有一个UTF格式标记，可以使用 string.getUtf() , string.setUtf() 函数获取或修改UTF标记。
UTF标记是按位设置的，utf & 8 表示一个UTF8编码的字符串，utf & 16表示一个UTF16编码的Unicode字符串。
而UTF & 1 表示一个ANSI字符串，用户在编写程序中一般不应去获取或修改该UTF标记，该格式标记应由aardio自动
维护，用于优化自动编码转换的效率。用户应当明确的了解一个文本的来源编码，并且有有需要时使用string.fromto()
等转换函数进行编码转换。aardio只要在能确认一个字符串的编码格式时才会对字符串进行标记（例如：直接写在aardio
源码中的字符串字面值，或者经过string.fromto函数成功转换编码的字符串）。

#### 转义字符串

转义字符串放在单引号中。支持\转义符，语法与C\C++相同。
需要注意的aardio中双引号中的字符串不能使用转义符，这一点与C语言有别。

在单引号中的字符串可以换行书写，但是aardio会忽略所有的换行，
aardio保证单引号中只能以'\r\n'表示回车换行符,所有字面值的回车换行被忽略 。
转义字符串支持的转义符与C,JS等类似：

<table class="dataintable">
  <tbody>
  <tr>
    <th>转义符 </th>
    <th>说明 </th></tr>
  <tr>
    <td>\\ </td>
    <td>表示普通\字符 </td></tr>
  <tr>
    <td>\ddd </td>
    <td>用一到三个数字组成十进制数值表示一个字符 ，<br>如果只想表示'\0'，并且后面有其他不相关的数字，<br>可以在\0后面加一个换行，例如 
      str ='\0<br>86'</td></tr>
  <tr>
    <td>\xAA </td>
    <td>用x后面的两位十六进制表示一个字符 </td></tr>
  <tr>
    <td>\uAAAA </td>
    <td>用u后面的4位十六进制表示一个Unicode字符，<br>
	可使用一对代理字符表示Unicode编码大于0x10000的4字节字符，例如：'\uD86E\uDC1C'<br>
	注意普通字符串里默认会解析为UTF-8编码的多字节字符，<br>
	而在Unicode字符串中解析为UTF-16编码的字符。</td></tr>
  <tr>
  </tr><tr>
    <td>\uAAAAAA </td>
    <td>\U大写时，<br>可在其后跟随4个或6个十六进制字符表表示一个Unicode字符，<br>支持Unicode编码大于0x10000的4字节字符。<br><br>注意普通字符串里默认会解析为UTF-8编码的多字节字符，例如'\U02b81c'<br>而在Unicode字符串中解析为UTF-16编码的字符，例如'\U02b81c'u。</td></tr>
  <tr>
    <td>\a </td>
    <td>响铃符(常用于print函数发出警告铃声，例如 io.print('\a') </td></tr>
  <tr>
    <td>\b </td>
    <td>退格 </td></tr>
  <tr>
    <td>\f </td>
    <td>换页 </td></tr>
  <tr>
    <td>\e </td>
    <td>ESC码。等价于 \x1b  </td></tr>
  <tr>
    <td>\r </td>
    <td>回车 </td></tr>
  <tr>
    <td>\n </td>
    <td>换行 </td></tr>
  <tr>
    <td>\r\n </td>
    <td>回车换行 </td></tr>
  <tr>
    <td>\t </td>
    <td>制表符(横向跳格) </td></tr>
  <tr>
    <td>\v </td>
    <td>匹配一个垂直制表符。等价于 \x0b </td></tr>
  <tr>
    <td>\" </td>
    <td>双引号 </td></tr>
  <tr>
    <td>\' </td>
    <td>单引号 </td></tr>
  <tr>
    <td>\[ </td>
    <td>方括号[ </td></tr>
  <tr>
    <td>\] </td>
    <td>方括号] </td></tr></tbody></table>

转义字符串可以换行、但是aardio会忽略换行符，必须使用\n表示换行、用\r\n表示回车换行。
如果单引号中仅包含一个字符、并且后面附加#号后缀、则表示该字符的字节码数值。

示例：

```js :no-line-numbers
io.open()

// 字符串中也可以直接用十六进制表示字符，例：
io.print('Hel\x6c\x6f world\x21'); //换行被忽略


//字符串也可以直用三位十进制数表示字符，例：
io.print('Hel\108\111 world\33') 

//如果单引号中仅包含一个字符，并且在后面加上#号标记,则表示字符的ASCII值
io.print( 'A'# ) //显示65
```

注意在转义符串结束后附加#符号表示字节码，附加U或u表示Unicode字符串（UTF16编码），例如：

```js :no-line-numbers
//用于在代码中输入UTF-16 LE编码字符串(代码页：1200)
var wstr = 'UTF16字符串'u 

//UTF-8编码字符串(代码页：65001)
var utf8str = 'UTF8字符串'
```

Unicode字符串（UTF16编码）用下标取字节或字符时，返回的是双字节的值，例如：

```js :no-line-numbers
import console; 

var wstr ='中文abc'u;
for(i=1;#wstr/2;1){
    console.log(wstr[ i ]) //宽字节码
    console.log(wstr[[ i ]]) //宽字节字符
}

console.pause(true);
```

#### 包含字符串

包含字符串用于将一个文件直接嵌入aardio代码中，并加载为一个二进制字符串。 例如：

```js :no-line-numbers
var str = $"/test/test.jpg"
```

在aardio程序编译发布以后，该文件就会直接被编译到aardio代码中，不再需要原来的文件也可以运行。


#### 注释字符串

在aardio的赋值语句中，可以将行注释、段注释作为一个字符串组成赋值语句。
因为aardio中段注定可以自定义注释标记里 星号数目 - 只要首尾匹配就可以，这就可以方便的用来表示复杂的字符串。
而不用担心所包含的字符串里可能出现字符串的结束标记。

注释字符串的作用与双引号类似，表示的是纯文本字符串，aardio解析后会将起标记为UTF8编码，
但是段注释保证将换行解释为\r\n'，并且忽略首尾紧邻星号的第一个空行（如果有的话）,而行注释保证字符串没有回车符('\r')或换行符('\n')


请参考:回车换行符

示例：

```js :no-line-numbers
str = //表示原始单行字符串，到行尾结束;

str = /*
表示原始多行字符串，首尾的*字符可以有一或多个，但*字符的数目必须首尾匹配
*/
```

**附：字符串导航图**


![](https://bbs.aardio.com/doc/reference/the%20language/datatype/string.gif)

## table(表)

table（表）是aardio中唯一的复合数据类型，除了非复合的基础数据类型以外，aardio中几乎所有的复合对象都是表，即使是变量的命名空间也是表。表的本质是一个集合(collection)，可以用于容纳其他的数据成员，并且表也可以嵌套的包含其他的表（table），在aardio里表几乎可以容纳一切其他对象。

如果我们把字符串、buffer、数值、函数、指针.....这些基础数据类型比喻为盘子中的菜，那么表这样的复合数据类型就是装菜的盘子，如果没有了盘子，所以就没有办法愉快的吃菜了（相当于在程序代码中传输、使用数据）。

#### 表的类型

表（table）包含的数据结构也被称为字典(dictionaries)、列表（list）、映射(map)、关联数组(associative arrays)、对象(object)......等等.虽然在不同的编程语言里的具体实现存在差异（例如有序或无序存储、使用或不使用哈希算法），但基本都是用来包含不定个数的键值对成员。

aardio中的表可以包含不定个数的成员，每个成员都由一个键值对组成（键用来指定成员的名称，值用来指定成员的值）。“键”可以任何除null以外的数据类型,甚至可以在table元素中包含table，table允许嵌套。“值”也可以任意数据类型，当值为null时表示删除该成员。

通常把“键”放在索引操作符“[]”中来索引一个元素的值，这时候键又称为“下标”或“索引”。例如 tab["键"] tab[1]，“[]”则被称为下标操作符。也可以把一个符合变量命名规则的键放在成员操作符“.”后面,例如 tab.key tab.key2 ;

根据键的存取排序规则，表包含的成员分为以下两种类型（ 表可以同时包含以下两种类型的成员 ）

##### 哈希表（无序集合）

aardio中的表是哈希表（hashtable），哈希表使用哈希算法存取，不会按其他特定顺序排序（在代码中添加成员的顺序将被忽略），所以在遍历哈希表时的顺序并不一定会保持代码中书写、添加表成员的顺序，因为我们把这种集合称为无序集合。哈希表的优势是查找速度非常快，即使表包含的成员非常多，仍然可以快速的访问成员键值对。

下面是一个创建哈希表的例子：

```js :no-line-numbers
tab = {
    a = 123;
    str = "字符串";
    [123] = "不符合变量命名规则的键应放在下标内。";
    ["键 名"] = "不符合变量命名规则的键应放在下标内。";
    键名 = {
        test = "表也可以包含表";
    }
}
```

##### 数组（有序集合）

如果表中不定个数的成员的“键”是从1开始、有序、连续的数值，那么这些成员构成一个有序数组。 在创建数组时，数组的键可以省略不写。表总是可以同时包含数组、以及非数组成员， 即使不包含数组成员，我们也可以将表作为空数组处理。

如果表中包含的成员使用了数值作为键，但是多个成员的键并不是从1开始的连续数值 - 则构成稀疏数组。 在aardio一般我们提到的数组 - 如果未加特别说明则是特指有序连续数组（不包含稀疏数组）。

如果表中包含了稀疏数组，或者成员的数值键包含不连续的、中断的数值，那么不应当作为有序数组使用。 aardio中几乎所有针对数组操作的函数或操作符 - 如果未加特别说明都要求参数是有序数组。

有序数组可以使用for循环（或者table.eachIndex）有序的遍历成员，下面我们看一个在aardio中使用数组的简单演示:

```js :no-line-numbers
import console; 

//在表中创建数组
var array = { 
    [1] = 123;
    [2] = "数组的值可以是任何其他对象"; 
    [3] = { "也可以嵌套包含其他表或数组"}
} 

//数组的键可以省略，下面这样写也可以（并且建议省略）
var array = { 
    123;
    "数组的值可以是任何其他对象"; 
    { "也可以嵌套包含其他表或数组"}
} 

//遍历数组成员,#array取数组长度
for(i=1;#array;1){
    console.dump(i,array[ i ]);
}

//使用 table.eachIndex 遍历也可以
for i,v in table.eachIndex(array){
    console.dump(i,v);
}

console.pause();
```

#### 构造表

用{}操作符构造新的table对象，
并以分号;分隔每一个元素 (允许使用逗号代替分号)。如果成员是一个函数并以}或end结束时，可以省略分隔符。

{}操作符在表达式中只能作为赋值语句的右值、函数参数、或被包含在另一个table构造器中，而不允许与其他操作符结合，不允许向前结合、向后结合，仅允许被括号{}[]()包含。

创建一个空的table。

```js :no-line-numbers
var days = {}
```

创建一个table数组。

```js :no-line-numbers
var days = { "Sunday"; "Monday"; "Tuesday"; "Wednesday"; "Thursday"; "Friday"; "Saturday" }

//days[1] 的内容是 "Sunday".days[2]的内容就是"Monday"......
```

table元素可以使用各种数据类型的变量，甚至可以是一个表达式或者一个函数，如果我们为table中的值赋于一个键名字，则在table中添加一个键值对。

```js :no-line-numbers
point = { x=100 ; y=200 }

//point.x 的值是100;point.y 的值是200
```

可以在一个table中同时包括有序数组、以及其他键值对。

```js :no-line-numbers
tab = {x=100;y=200;"Sunday"; "Monday"}

//tab.x 的值是100;tab.y 的值是200
```

table的键名并不要求符合变量命名规则，键可以是任何除null以外的值或字符串。不符合变量命名规则的键名必须置于下标操作符内（并且必须是字符串，例如包含在引号中字面值）。

```js :no-line-numbers
//在任何时候，table中不符合变量命名规则的键必须通过[]操作符访问，以下是正确的写法：
tab = { [1]=300;[2]=400;["+"]=200;[1+1]=200 }; //因为变量名不能以数字开始,更不能包含运算符。

以上的写法等价于
tab ={};
tab[1]=300;
tab[2]=400;
tab["+"]=200;
tab[1+1]=200;
```

我们可以把多个变量用一对花括号包含起来以转换为table数组，也可以通过table.unpack函数将table数组转换为多个变量。

```js :no-line-numbers
var tab = {"a";"abc";"abcd"} ; //创建一个table;
a,b,c = table.unpack(tab);
var tab2 ={ table.unpack(tab) }; //将所有返回值转换为table变量tab2
```

默认表的键值等使用"="号分隔，表的元素使用";"号分隔。
新版 aardio 支持用","号代替";"号分隔表元素，支持用 ":" 号代替"="号分隔键值对（结构体字段仍然必用"="号分隔键值对，不允许用":" 号代替）

如果键名为字符串，新版 aardio 允许将键名置入引号，因此可以使用类JSON的语法定义表对象，例如：

```js :no-line-numbers
var tag ={"name1":123,"name2":456}
```

#### 在函数参数中构造表

当在函数内部有且只有一个使用{}构造器构建的table参数时，并且不包含数组元素，则{}可以省略。

例如：

```js :no-line-numbers
func( { k = 123 ;  k2=456 }  )
```
 

可以省略{}写成如下格式：
 
 
 ```js :no-line-numbers
 func( k = 123 ;  k2=456 )
 ```

注意在函数参数中省略{}构造表参数时 —— 不能再使用":" 号代替"="号分隔键值对。

#### 访问table成员

在访问table中的元素时，用元素的键作为下标查询元素的值，例如:

 ```js :no-line-numbers
 tab = {}; //用一对花括号创建一个空的table
 tab["x"] = 200; //下标为字符串"x"，键名为字符串"x"，值为数值200。
 tab[1] = "hellor world"; //下标为数字1,键索引为1，值为字符串 "hellor world"
 ```




如果“键”是一个数字索引称为“键索引”，如果键是一个字符串称为“键名” ，
对于符合变量命名规范的键名，可以用"."成员符访问。例如：


 ```js :no-line-numbers
tab["x"] = 200; 也可以写为 tab.x = 200;
 ```


当我们将tab元素赋值为null会删除这个元素。例如：

 ```js :no-line-numbers
tab.x = null; //删除tab.x
 ```
 

#### 遍历table


遍历table列表中的全部元素

 ```js :no-line-numbers

import console; 

var tab = { a111="字符串"; b2=123; c="字符串2"; d=23; e=56; 78; 99; 123; 0 }

for k,v in tab  { 
    /*
    k为键,v是匹配的值,
    在这里键值并不会按上面创建表的键值顺序输出
    */
    console.log(k,v);
};

console.pause(true);
 ```


遍历table列表中的数组元素

```js :no-line-numbers
import console; 

var array = { 
    a="字符串";b=123;c="字符串2";d=23;e=56; 
    78; 99; 123; 0 
}

//#array取数组长度
for( i=1; #array;1){ 
    //i为当前数值索引,tab[ i ]为当前值
    console.log( i ,array[ i ] );
}

//也可以用while语句模拟for循环语句遍历数组
while( var i = 0; i++ ; i <= #array ) {
   console.log( i ,array[ i ] );
}

console.pause(true);
```

**附：table导航图**

![](https://bbs.aardio.com/doc/reference/the%20language/datatype/table.gif)





## function(函数)

函数是预定义子程序，封装一段可复用的代码，接受零个或多个参数，计算并返回零个或多个值。
函数内部是一个语句块，包含一组语句、以执行预定义的程序指令，实现程序员定义的算法，并返回计算结果。
函数的作用类似操作符，接受操作数作为参数，应用算法，执行指令，并返回结果，与操作符不同的是参数的数目不限，且返回值的数目不限。并且函数可以有自定义的名字。

#### 定义函数

定义函数的基本语法：

```js :no-line-numbers
function 函数名字(形参,形参2,...) { 
    //函数内部代码

    //多个返回值以逗号分隔，如果省略return语句，函数默认返回null空值。
    return 返回值,返回值2;
} 
```


也可以使用begin end标记函数体

```js :no-line-numbers
function 函数名字(形参,形参2,...) begin
    //函数内部代码

    //多个返回值以逗号分隔，如果省略return语句，函数默认返回null空值。
    return 返回值,返回值2;
end 
```


函数也可以赋值给成员变量、具名常量。

```js :no-line-numbers
函数名字 =function(形参,形参2,...) {
    //函数内部代码

    //多个返回值以逗号分隔，如果省略return语句，函数默认返回null空值。
    return 返回值,返回值2;
} 
```

函数定义可以不指定名字 - 即匿名函数　。

```js :no-line-numbers
io.open(); //打开控制台

io.print("匿名函数"); //在控制台窗口输出对象
io.print(

    function(形参,形参2,...) begin
        //函数内部代码
    
        //多个返回值以逗号分隔，如果省略return语句，函数默认返回null空值。
        return 返回值,返回值2;
    end 

);
```



#### 定义局部函数

函数也可以作为局部变量。局部函数像局部变量一样作用域限于当前语句块。

定义局部函数的基本语法：

```js :no-line-numbers
var function 局部函数名字(形参,形参2,...) { 
   //函数内部代码

   //多个返回值以逗号分隔，如果省略return语句，函数默认返回null空值。
   return 返回值,返回值2;
} 
```


也可以使用赋值语句定义局部函数

```js :no-line-numbers
var 局部函数名字 = function (形参,形参2,...) begin
    //函数内部代码

    //多个返回值以逗号分隔，如果省略return语句，函数默认返回null空值。
    return 返回值,返回值2;
end 
```



#### 局部函数的递归问题

当局部函数递归调用自身时，因为定义函数时是先创建函数、然后指定局部变量名，因此在局部函数体中并不知道自已的名字是一个局部变量，这样导致局部函数在函数体内部不认识自已的名字。

例如：

```js :no-line-numbers
var 递归 = function ( 计数 ){

	if (  计数 <= 0   )
		return  计数 
	else  
		return 递归(  计数-1 )   // 出错了找不到函数名字"递归"
		
}

//调用递归函数
递归( 5 )  
```

解决办法：

```js :no-line-numbers
//在定义函数以前声明局部变量名字
var 递归;

//然后再定义函数体
递归 = function ( 计数 ){

	if (  计数 <= 0   )
		return  计数 
	else  
		return 递归(  计数-1 )   // 找到函数名字"递归"
		
}

io.open()

//调用递归函数
io.print( 递归( 5 ) )
```


#### 调用函数

调用函数的语法，如下：

> 接收返回值的变量列表 = 函数名字(参数一,参数二,更多参数列表);

实参的数目如果多于形参的数目，多余部分被丢弃。
实参的数目如果少于形参的个数，不足的部分添加null值。

可以丢弃部分返回值，如下：

> 返回值一,,,返回值四 = 函数名字(参数一,参数二,更多参数列表);
可以丢弃返回值，使用单独的函数调用构成独立语句，如下：

函数名字(实参列表);
可以省略部分参数，如下：

> 返回值一,,,返回值四 = 函数名字( 参数一, ,  , 参数四, , 参数六 );

#### 函数参数

形参：函数定义时括号中预定义的形式参数，形参可以在函数体内部作为局部变量使用。<br>
实参：函数调用时括号中指定的实际参数。

```js :no-line-numbers
//这里的a,b,c称为形参，可以将形参看成函数内部的局部变量名字
function test(a,b,c){ 
    return a+b+c; //形参可以在函数体内部作为局部变量使用 
} 

返回值 = test(2,3,4); //这里的2,3,4 称为实参 
```

更多关于函数参数的使用技巧请参考：　函数参数用法

#### 函数局部变量

在函数体中可以用var语句定义局部变量，函数的形参也可以作为局部变量使用。<br>
函数中的局部变量与外部变量命名相同时，在各自的作用域内生效，并不冲突。


例如：
```js :no-line-numbers
io.open();//打开控制台

str = "我是外部变量"

//定义函数
function func() begin
	var str = "我是局部变量" 
	io.print( str , ..str ) //显示变量值
end;

//调用函数
func();
 
io.print(str) //显示全局变量值 
```

根据最少知道原则，在函数中应尽量避免使用全局对象，尤其要避免修改全局对象。<br>
并且局部变量存取速度更快。无论是为了效率，还是降低程序复杂度，都应当优先使用局部变量。

更多关于局部变量的内容请参考：局部变量 定义局部变量

#### 定义成员函数

定义成员函数原型：

```js :no-line-numbers
tab = {};

tab.函数名字 = function( 形参列表 ) {
    //函数内部内码
}
```

也可以使用下面的格式定义成员函数：

```js :no-line-numbers
tab = {};

function tab.函数名字( 形参列表 ) {
    //函数内部内码
}
```

调用成员函数原型：

```js :no-line-numbers
tab.函数名字( 实参列表 );
```

成员函数的owner对象

请参考：owner


## class(类)

使用class关键字定义类。类可以动态创建数据结构相同的table对象。

定义类的语法：
```js :no-line-numbers
//定义类
 类名字 = class{
  
   //构造函数可以省略
 	ctor( 构造参数列表 ){
 		//构造函数代码
 	}
 
 	类属性 = "属性值";
 	
 	类方法 = function(参数){
 	}
 	
 }
```
 
也可以使用下面的格式定义类：
```js :no-line-numbers
 //定义类
 class 类名字{
  
   //构造函数可以省略
 	ctor( 构造参数列表 ){
 		//构造函数代码
 	}
 
 	类属性 = "属性值";
 	
 	类方法 = function(参数){
 	}
 	
 }
```

定义类成员的语法与定义table成员相同，请参考：[table数据类型](#table-表)

示例如下：
```js :no-line-numbers
class cls{
	a = 123;
	func = function(){
		//类有自已的名字空间，访问全局对象要加上..前缀
		..io.print("我是对象内部的成员函数") 
	}
	
}

//创建对象
obj = cls();
obj2 = cls();

io.open()

//访问对象属性
io.print( obj.a )

//调用对象方法
obj2.func();
```



## fiber(纤程)

fiber.create()创建并返回的纤程对象。 纤程类似线程，但不是线程.
纤程有独立的运行堆栈，并且也可以暂停或继续运行，但是纤程并不会创建新的线程，也不能同时运行多个纤程.

请参考《库函数文档》：内核库->纤程库

## 转换数据类型

数值、字符串会自动转换，但是我们也可以用aardio提供的函数强制转换。

aardio提供三个强制转换动态类型的函数
* tostring(v) 转换参数v为字符串，可使用_tostring元方法自定义转换函数。
* tonumber(v) 转换参数v为数值，可使用_tonumber元方法自定义转换函数。
* topointer(v) 转换参数v为指针，可使用_topointer元方法自定义转换函数。

```js :no-line-numbers
io.open(); //打开控制台窗口，用来支持io.print函数
n = tonumber( "2" );//tonumber函数强制转换一个变量为数字，如果失败返回null空值
str = tostring( 2 );//强制转换一个变量为字符串，如果失败返回null空值
ptr = topointer( 123 ); //强制转换为指针，如果失败返回null空值
io.print( type(n)，type(str)，type(ptr) );
```

另外，使用2个逻辑非操作符可以将任何值转换为布尔值，例如:

```js :no-line-numbers
var num = 0;

import console
console.log( !!num )
console.pause()
```

## 使用type函数可以读取数据类型

#### 函数原型

> dataType[，structType][，metaType] = type( any )

#### 函数说明

type函数返回对象的基本数据类型dataType。
如果对象是一个struct结构体，则返回结构体类型structType。
如果对象在元表中指定了_type字段的值，则返回元类型metaType。

aardio用字符串描述类型，所以返回的类型都是字符串，
如果没有任何参数，type函数无返回值.

#### 调用示例

```js :no-line-numbers
io.open(); //打开控制台窗口

io.print( type(null) ， type.null );//显示null ， null
io.print( type("Hello world") ， type.string );//显示 string ， string
io.print( type(1000) ， type.number );//显示 number ， number
io.print( type(io.print) ， type.function );//function ， function
io.print( type( class{} ) ， type.class );//显示 class ， class
io.print( type(true) ， type.boolean );//boolean ， boolean
io.print( type( io.stdin ) ， type.cdata );//显示 cdata ， cdata
io.print( type( {x=0;y=0} ) ， type.table );//显示 table ， table
io.print( type( topointer( 1 ) ) ， type.pointer );//显示 pointer ， pointer
```

## 使用type.eq比较数据类型

#### 函数原型

> eq = type.eq( obj，obj2 )

#### 函数说明

比较参数一、参数二的类型、元类型、struct类型，如果完全相等返回true，否则返回false。 请注意在 aardio 中如果一个函数说明会返回布尔值( true，false) ，如果未加特别说明则允许返回任何可自动转换为布尔值的其他数据类型的值。 例如 type.eq() 可能会返回 null 值以替代 false，aardio 中的函数说明不再重复说明此类自动类型转换规则。

#### 调用示例

```js :no-line-numbers
import console;
import time.ole

var tmOle = time.ole();
var tm = time();
 
//type.eq 严格比较所有类型(基础类型、元类型、struct类型)
if( type.eq( tmOle，tm ) ){
    console.log("tmOle，tm 类型相同")
}
else{
    console.log("tmOle，tm 类型不相同")
}

//time.istime 不比较元类型，因此兼容 oletime
console.log( "是 time 对象吗?"，time.istime(tmOle) )

console.pause();
```

<script>
import {keyFunction} from '/docs/deploy'
export default {
  setup() {
    return {
		keyFunction
    }
  }
}
</script>
