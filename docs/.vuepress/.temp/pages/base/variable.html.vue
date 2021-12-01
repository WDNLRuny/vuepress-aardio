<template><h1 id="变量、常量" tabindex="-1"><a class="header-anchor" href="#变量、常量" aria-hidden="true">#</a> 变量、常量</h1>
<p>变量、常量指代码中表示数据的对象，通常使用合法的标志符、字面值(数值、字符串)来表示。</p>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<p>在程序运行过程中，用来存储数据值并且其<strong>值能被改变的对象</strong>称为变量。<br>
变量的名称用字母、数字、中文字符、下划线等组成的合法标识符来表示。</p>
<p>变量名开始字符不能为数字。<br>
变量名包含中文时，中文字符前面不能有字母或数字。<br>
可以使用美元符号($)作为变量名或变量名的第一个字符。<br>
可以使用下划线作为变量名或常量名的首字符,当下划线作为首字符时表示常量，单个下划线表示变量。</p>
<p>应遵循就近原则(Principle of Proximity):在第一次使用局部变量之前定义该变量，以使代码保持清晰的结构。</p>
<h3 id="成员变量" tabindex="-1"><a class="header-anchor" href="#成员变量" aria-hidden="true">#</a> 成员变量</h3>
<p>成员变量是属于一个<a href="">名字空间</a>的成员对象。<br>
变量的默认名字空间为 <code>global</code> 名字空间，并可以使用 <code>namespace</code> 改变指定代码块的名字空间。<br>
可以使用 <code>self</code> 关键字访问当前名字空间。使用 <code>..</code> 操作符访问 <code>global</code> 名字空间</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//没有用var语句显式声明的变量，默认就是当前名字空间的成员变量</span>

变量 <span class="token operator">=</span> <span class="token string">"字符串:普通变量"</span><span class="token punctuation">;</span>
变量 <span class="token operator">=</span> <span class="token string">"变量的值是可以改变的"</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span>str <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">//..str等价于 ..global.str</span>
</code></pre></div><h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h3>
<p><code>var</code> 声明一个局部变量，作用域为当前语句块，以及被当前语句块所包含的语句块。<br>
<code>var</code> 语句声明的局部变量可以指定一个初始值，也可以不指定，建议对所有变量指定初始值。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> 局部变量<span class="token punctuation">;</span>
局部变量 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span>
io<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>局部变量 <span class="token punctuation">)</span>
</code></pre></div><p>请参考 <a href="">var赋值语句</a> <a href="">函数局部变量</a></p>
<h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2>
<p>在程序运行过程中，用来存储数据值并且其<strong>值不能被改变的对象</strong>称为常量，常量仅可初始化赋值一次，不可以修改其常量的值。</p>
<h3 id="字面常量" tabindex="-1"><a class="header-anchor" href="#字面常量" aria-hidden="true">#</a> 字面常量</h3>
<p>指以数值、字符串等字面值表示数据的对象。<br>
像 <code>123</code> <code>&quot;abc&quot;</code> 这样的值被称之为字面值，被称为字面值是因为他的值就是代码直接描述的值，并且没有名字可以称呼他，只能用他的值来表示。</p>
<p>常量只能赋值一次，重复赋于相同的数字或字符串等常量值将会被忽略，赋于不同的值将会抛出错误。<br>
aardio中的常量以下划线作为起始字符的标识符来表示。</p>
<h3 id="具名常量" tabindex="-1"><a class="header-anchor" href="#具名常量" aria-hidden="true">#</a> 具名常量</h3>
<p>用合法的标识符来表示不可修改数据的对象称为常量，与字面值不同的是他具有类似变量名的常量名称。
常量名以下划线作为首字符，或使用 <code>::</code> 操作符将普通的变量转换为常量。</p>
<p>具名常量可以理解为赋值后不可修改的变量。</p>
<h4 id="成员常量" tabindex="-1"><a class="header-anchor" href="#成员常量" aria-hidden="true">#</a> 成员常量</h4>
<p>用字母、数字、中文字符、下划线等组成的标识符来表示，并且必须以下划线作为起始字符。<br>
成员常量与成员变量一样默认创建于当前名字空间(self名字空间)、也可以指成员常量的名字空间前缀。<br>
<strong>成员常量的长度必须大于1并小于256个字节</strong>(单个下划线不是常量,在aardio中通常用作匿名变量占位符)</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>_const <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
_const <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span><span class="token comment">//没有修改常量，被忽略</span>
_const <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span><span class="token comment">//出错，抛出异常：不能修改只读成员</span>
</code></pre></div><p>在元表中指定元属性 <code>_readonly = false</code> 可禁用读成员保护，
如果元表中不设置 <code>_readonly</code> 则默认启用只读成员保护（所有名字以下划线开头的禁止修改非null值）。</p>
<p>如果元表中设置 <code>_readonly</code> 为任何非 <code>null</code> 值都会被强制转换为 <code>false</code>,
该值一旦设置以后即不可修改，如果希望启用只读成员保护，唯一的方法就是不设置该属性。</p>
<p>global对象无论元属性 <code>_readonly</code> 怎么设置都会被忽略,只读成员保护总是启用状态。</p>
<h4 id="全局常量" tabindex="-1"><a class="header-anchor" href="#全局常量" aria-hidden="true">#</a> 全局常量</h4>
<p>用大写字母、数字、下划线等组成的标识符来表示，并且必须以“下划线+大写字母”作为起始字符。
全局常量类似于成员常量，区别是必须大写、并且位于globle根名字空间。</p>
<p>实际上使用全局对象是不好的习惯，你应当尽可能的避免使用全局对象、将他们放入适当的名字空间。
不要介意多打几个字多写几个名字空间前缀，理解了全局对象会不知不觉增加程序的复杂度、并且努力地去避免使用全局对象(这里不是指名字空间、相反应当更多地使用名字空间来组织数据)，意谓着你已经成为了一名有经验的程序员。</p>
<p>而且全局常量在aardio是运行时对象，意谓着会增加发布后的程序体积。
把他们改为字面常量并加上注释是一个不错的优化方案，aardio提供相应的工具。
这种优化技术被用于libs\win#DEFINE.aardio(这不是一个库，放在库目录下仅仅是为了让扫描常量声明到智能提示数据库)</p>
<h4 id="转换全局常量" tabindex="-1"><a class="header-anchor" href="#转换全局常量" aria-hidden="true">#</a> 转换全局常量</h4>
<p>将一个变量名转换为 global名字空间下的全局常量名 - 并保护该常量在其后加载的代码中一旦赋为非空值后即不可修改</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token operator">:</span>Kernel32 <span class="token operator">:</span><span class="token operator">=</span> raw<span class="token punctuation">.</span><span class="token function">loadDll</span><span class="token punctuation">(</span><span class="token string">"Kernel32.dll"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>全局常量需要遵守以下使用规则:</p>
<ul>
<li>全局常量名首字母大写（以区别普通变量 ）。</li>
<li>当一个变量被定义为全局常量，赋于非空值以后其值即不能再随意更改 。</li>
<li>::的作用域是根据代码的载入顺序向下向后的，所以在同一文件中已定义的全局常量名再次使用时可以省略::前缀，但因为代码文件的载入有不确定性 - 在其他文件首次使用该常量名时仍然应该使用::定义一次。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>aardio默认定义了少量全局常量函数名 - 这些关键函数全部小写首字母，但在aardio编辑器中显示为蓝色高亮状态。关键函数属于global名字空间，并在所有名字空间下可以直接使用。</p>
<p>以下为aardio提供的关键函数列表，关于这些关键函数的具体用法，请参考《库函数文档》或aardio编辑器的函数提示。</p>
<table>
	<tr>
	    <th>关键字</th>
	    <th width="100%">说明</th>
	</tr>
	<tr v-for="item in keyFunction" :key="item">
	    <td>{{item.key}}</td>
	    <td>{{item.explain}}</td>
	</tr>
</table>
</div>
<h3 id="使用初始化赋值语句定义常量" tabindex="-1"><a class="header-anchor" href="#使用初始化赋值语句定义常量" aria-hidden="true">#</a> 使用初始化赋值语句定义常量</h3>
<p>常量是仅能初始化赋值一次，对于数值常量，重复赋于相同的值会被自动忽略。</p>
<p>如果常量的值是非数值对象，即不能保证每次创建的值是相同的，为避免无意中修改常量值导致异常，可使用:=操作符赋值。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token operator">:</span>Func <span class="token operator">:</span><span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> begin

end<span class="token punctuation">;</span>
</code></pre></div><p>上面的代码等效于</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token operator">:</span>Func <span class="token operator">=</span> Func or <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> begin

end<span class="token punctuation">;</span>
</code></pre></div></template>

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
