# 操作符

## 成员操作符

成员符访问对象的成员.设有下面的table对象:

```js :no-line-numbers
tab = {
    member = 123;
    count = 20;
}
```

<table>
	<tr>
	    <th>操作符</th>
		<th>示例</th>
	    <th>说明</th>
	</tr>
	<tr v-for="item in getOperator(1)" :key="item">
	    <td>{{item.key}}</td>
	    <td>{{item.example}}</td>
		<td>{{item.explain}}</td>
	</tr>
</table>

自以上示例可以看出,以上几种访问对象成员的方法作用类似.都可以存取访问对象的成员.

下标操作符也可以用于字符串、或buffer对象，返回的是指定位置的字节码（数值），例如：

```js :no-line-numbers
import console;
var str = "test测试"
var wstr = 'Unicode/UTF16宽字符串'u
var buf = raw.buffer("abc测试");
console.log( str[1], wstr[1], buf[1] );
console.pause(true);
```

下标用于字符串只能进行只读访问（只能读不能写），
而buffer对象各方面与字符串类似，很多字符串函数都可以兼容buffer对象，
下标的用法跟字符串也类似，但buffer对象的下标操作符是可读可写的（可使用下标修改字节码）

**要特别注意的是：**

Unicode/UTF16字符串使用下标操作符返回的是宽字节码（2个字节组成的16位数值）。
如果需要返回字符而不是字节码，需要改用直接下标操作符 [[ ]]
比较特殊的是直接下标[[]],这个操作符会禁止aardio调用对象的元方法.
直接下标仅支持table对象、字符串对象，其中字符串为只读访问(只能读取成员,不能写入),使用直接下标访问字符串成员时返回的是字符(字符串对象),而使用普通下标返回的是该字符的字节码(数值对象),示例如下:

```js :no-line-numbers
str ="abc"

io.open();
io.print( str[1] == 'a'# ) //下标越界会返回0
io.print( str[[1]] == 'a' ) //下标越界会返回null
```

将直接下标用于没有成员的数据类型,例如数值变量等,直接下标操作符不会象普通成员下标操作符那样抛出运行时异常,而是返回一个null值.使用这个特性,我们可以同时判断一个对象是不是集合对象,并且是否拥有指定的成员.

在win.ui库中有很多的函数,部分参数兼容win.form对象或普通的窗口句柄,这时需要快速的判断对象是不是一个表,是否有hwnd成员,而win.form创建的对象有指定_get元方法,对于不存在的对象不是返回null值,而是返回一个table,这样我们写起来可能非常麻烦,大概要这样写:

```js :no-line-numbers
> hwnd = ( type(arg)==type.table && type(arg.hwnd)==type.number ) ? arg.hwnd : arg
```

或者写直白一点:

```js :no-line-numbers
if( type(arg)==type.table && type(arg.hwnd)==type.number ) 
   hwnd = arg.hwnd 
else
   hwnd = arg;
```

因为arg可能是一个数值,对数值写arg.hwnd会出错,所以要先判断他是不是一个type.table,因为win.form对象还有元方法不存在的对象会返回table,这时后面又要判断他返回的是不是一个数值.

这时候我们可以用直接下标操作符,可以很简单的完成上面的所有事,禁止元方法,检测对象是否一个table,并且是否拥有指定的成员:

```js :no-line-numbers
hwnd = arg[["hwnd"]]: arg
```

aardio要求你使用这种麻烦一点的操作符郑重其事地表明：你真的知道这个arg对象可能会是一个数值或什么其他的东西。这不是一个粗心的失误。

## 算术运算符

对两个操作数进行算术运算。

如果其中是一个操作数是字符串则尝试转换为数值运算，转换失败则抛出异常。<br>
如果是其他类据类型则查找对象的元方法进行运算，如果对象并未定义元方法则抛出异常。

<table>
	<tr>
	    <th style="width:70px;">运算符</th>
	    <th>说明</th>
	</tr>
	<tr v-for="item in getOperator(2)" :key="item">
	    <td>{{item.key}}</td>
		<td>{{item.explain}}</td>
	</tr>
</table>

## 按位运算符

所有按位运算符总是将操作数转换为32位整数，以二进制形式按位比较，0为假，1为真。不支持运算符重载。

aardio支持自定义进制数值，语法为　自定义进值 + '#' + 数值。
因此可以用 2#101表示二进制数101，按位运算符都是针对二进制数的操作，因此下面使用二进制数来演示。
在实际使用时可以使用十进制数值(所有进制最终都是以二进制存储、按位运算并无区别。)

#### 按位取反 ~

求反运算符~为单目运算符，具有右结合性。 其功能是对参与运算的数的各二进位按位求反。
例如:

```js :no-line-numbers
var b  = string.format("2#%b",~2#101  ); 
io.open();io.print( b); //显示2#11111111111111111111111111111010
```

#### 按位与 &

按位与运算 按位与运算符"&"是双目运算符。其功能是参与运算的两数各对应的二进位相与。只有对应的两个二进位均为1时，结果位才为1 ，否则为0。参与运算的数以补码方式出现。
例如 :

```js :no-line-numbers
var b  = string.format("2#%b",2#101 & 2#100 ); 
io.open();io.print( b); //显示2#100
```

#### 按位或 |

按位或运算符“|”是双目运算符。其功能是参与运算的两数各对应的二进位相或。只要对应的二个二进位有一个为1时，结果位就为1。参与运算的两个数均以补码出现。
例如 :

```js :no-line-numbers
var b  = string.format("2#%b",2#101 | 2#110 ); 
io.open();io.print( b); //显示2#111
```

#### 按位异或 ^

按位异或运算符“^”是双目运算符。其功能是参与运算的两数各对应的二进位相异或。只要对应的二个二进位相同，结果位就为0,否则为1。参与运算的两个数均以补码出现。
例如 :

```js :no-line-numbers
var b  = string.format("2#%03b",2#101 ^ 2#110 ); 
io.open();io.print( b); //显示2#011
```

#### 按位左移 <<

a << n 将数值a按位向左移动n位(如果n大于等于32，则为n对32取模结果的位数)。
左移n位就相当于乘以2的n次方(在没有溢出的前提下) 。
例如 :

```js :no-line-numbers
var b  = string.format("2#%b",2#101 << 1  ); 
io.open();io.print( b); //显示2#1010
```

#### 按位右移 >>

a >> n 将数值a按位向右移动n位(如果n大于等于32，则为n对32取模结果的位数) ，保留符号位(负数保持最高位为1)
右移n位就相当于除以2的n次方(在没有溢出的前提下)
例如 :

```js :no-line-numbers
var b  = string.format("2#%b",2#101 >>1 ); 
io.open();io.print( b); //显示2#10
```

#### 按位无符号右移 >>>

a >>> n 将数值a按位向右移动n位(如果n大于等于32，则为n对32取模结果的位数) ，不保留符号位(负数不保持最高位为1，因此右移后会变成正数)。
右移n位就相当于除以2的n次方(在没有溢出的前提下)
例如 :

```js :no-line-numbers
io.open();io.print( -2>>>18 ); //显示16383
```





## 连接运算符

对两个操作数进行字符串连接操作

如果操作数不是字符串，aardio将尝试自动转换为字符串，如果转换失败会报错

<table>
	<tr>
	    <th>运算符</th>
	    <th>说明</th>
	</tr>
	<tr v-for="item in getOperator(3)" :key="item">
	    <td>{{item.key}}</td>
		<td>{{item.explain}}</td>
	</tr>
</table>

::: tip
aardio会将引号前后的+运算符自动转换为字符串连接运算符++
:::

例如：

```js :no-line-numbers
str = "hello " ++ "world" // str为“hello world” 
str = 123 + "456" // 表达式仍然会被解释为 123 ++ "456" 
```

## 等式运算符

等式运算符比较两个操作数是否相等，并返回boolean类型的值(true或false)。

<table>
	<tr>
	    <th>运算符</th>
	    <th>说明</th>
	</tr>
	<tr v-for="item in getOperator(4)" :key="item">
	    <td>{{item.key}}</td>
		<td>{{item.explain}}</td>
	</tr>
</table>

<table>
	<tr>
	    <th>示例</th>
	    <th>结果</th>
	</tr>
	<tr v-for="item in example" :key="item">
	    <td>{{item.expression}}</td>
		<td>{{item.return}}</td>
	</tr>
</table>

## 取长运算符

`#` 取字符串长度、或table数组元素个数。

如果对象是null空值,返回0,
如果对象是字符串返回字符串长度,
如果对象是table数组,返回table数组长度 - 该操作符取的是索引自1开始的序列数组的长度，而稀疏数组应使用table.range()函数获取索引范围。

否则检查对象是否定义了\_len元方法，如果存在就调用\_len元方法返回值,否则抛出异常.

例如：

```js :no-line-numbers
str = ""
if( #str ){
    io.print ( "字符串非空",str )  
}
else{
    io.print ( "null或空串" )  
}
```

## 逻辑运算符

逻辑操作符将其操作数视为条件表达式(与布尔值true比较的等式,请参考：[等式运算符](#等式运算符) )，首先将操作数求值，并转换为逻辑值(boolean值)，0,null转换为false，而所有非零、非false、非null值转换为true，如果结果为false则条件为假，结果为true则条件为真。

## 关系运算符

关系运算符比较两个操作数，返回boolean类型的值(true或false)

## 运算符重载

对于一个table对象，我们可以重载运算符使操作数执行自定义的运算函数。

## 包含操作符

包含操作符可以将外部文件链接到当前代码中。

## 操作符优先级

aardio操作符优先级与C系语言基本兼容，唯一的区别是：位运算符优先级略高于等式、不等式运算符。从而保证各组运算符的优先级更加有序、并容易记忆。

<table>
	<tr>
	    <th width="200px">操作符</th>
		<th width="60px">结合</th>
	    <th>说明</th>
	</tr>
	<tr v-for="item in operator" :key="item">
	    <td><span v-for="operator in item.operator" :key="operator" style="margin-right: 10px;white-space:nowrap;">{{operator.key || operator}}</span></td>
	    <td>{{item.associativity == 1 ? "左向右":"右向左"}}</td>
		<td>{{item.explain}}</td>
	</tr>
</table>

<script>
import {operator} from '/docs/deploy'
export default {
  setup() {
    return {
		operator,
		example:[
			{
				expression:"::User32 != ::Kernel32",
				return:true
			},
			{
				expression:"{} == {}",
				return:false
			},
			{
				expression:"time.now() == time.now()",
				return:true
			},
			{
				expression:"0==false",
				return:true
			},
			{
				expression:"null==false",
				return:true
			},
			{
				expression:"1==false",
				return:false
			},
			{
				expression:'"123"==123',
				return:true
			},
			{
				expression:'"abc"==123',
				return:false
			},
			{
				expression:'"abc" === "abc"',
				return:true
			},
			{
				expression:'null === false',
				return:false
			},
			
		]
    }
  },
  methods:{
	  getOperator(type){
		  return operator.filter(v=>v.type == type).map(v => v.operator).reduce((a,b)=>a.concat(b))
	  }
  }
}
</script>
