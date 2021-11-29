# 介绍

## aardio 是什么

aardio 专注于**桌面软件开发**，{{ new Date().getFullYear() - 2004  }}年一直保持非常活跃地更新( [更新日志](https://ide.update.aardio.com/log/) )，aardio 被多年用于生产项目实践，久经测试和锤炼。

aardio 在诞生之初就设计了良好的架构与语法。正因如此，aardio 历经{{ new Date().getFullYear() - 2004  }}年发展，日新月异，每一年都会带来大量的更新扩展，但仍然能保持最初简洁高效的结构与语法，即使是最早的 aardio 源代码仍然能不经修改在最新版本开发环境中完美运行。

## aardio 的优点

### 体积小

aardio 小、轻、快，轻便利索，体积仅 6.5MB，学习和使用成本极低。

aardio 虽然小，但提供了惊人数量的开源标准库、扩展库 - 这些库基本都是由纯 aardio 代码实现，涉及到了桌面编程的方方面面。

### 门槛低

aardio 中的所有库基本都是由作者一个人编写，所以拥有良好的一致性。aardio为 每一个库的每一个接口函数都编写了文档，并且提供了大量的演示范例。aardio 使用流行的类 C 语法(非常接近 Javascript )，在设计中尽可能地避免哗众取宠、标新立异，并且吸取和借鉴流行语言的习惯用法。不少 aardio 用户都表示只要有一点编程基础，aardio 几乎不用特别学习，看几天就会用了，仅仅是复制拼凑范例都能快速开发出不错的软件。

### 易用性极强

aardio 属于易用性极强的动态语言，但也是一种混合语言，可以罕见地、非常方便地操作静态类型，因此可以直接调用 C语言、C++ 等等静态语言的 API 接口函数( 不需要像VB那样先声明API )，aardio 可以支持非常多的API调用约定，例如 stdcall，cdecl，thiscall，fastcall，regparm(n) 等调用约定 aardio 都可以支持。因为 aardio 奇特的语言特性，aardio 的胶水能力极强，在 aardio 中可以非常方便地调用 C语言、C++、VB、C#、Java、Python、Javascript、Node.Js、Flash ActionScript、PHP、VBScript、NewLISP、AutoLISP、Delphi、FreeBASIC、Ruby、Rust、Julia、Nim、Go 语言、批处理 ...... 甚至可以直接嵌入汇编机器码并且转换为普通的 aardio 函数。aardio 可直接调用、嵌入、交互的第三方编程语言数量非常多，实现这些第三方语言接口的功能模块基本都是开源的（很多只用了极少的代码）。

### 嵌入浏览器控件

aardio 可以嵌入非常多的浏览器控件，例如系统自带的 WebBrowser、WebView 控件、 以及 WebView2、WebKit、Electron、CEF3、HTMLayout、Sciter...... 甚至可以直接调用系统安装的 Chrome、Chromium Edge 等浏览器写软件界面。而且在网页中调用本地接口、以及 aardio 与浏览器的交互极其方便，例如直接调用 Javascript 函数，并且在 Javascript 中直接回调 aardio 函数，不需要任何复杂的封装和中间件，你甚至可以在 Javascript 中直接调用 WINAPI 函数。

### 兼容性好

aardio 不仅可以方便地使用 Web 技术编写界面，也提供可视化开发工具，可以方便地通过拖拉传统控件创建程序。并且 aardio 提供强大的 plus控件（开源）可以方便地实现控件九宫格贴图、透明贴图、可以快速制作出漂亮的界面。而且aardio可以非常方便地生成独立、绿色、无依赖的软件，生成的软件极小，通常比使用其他开发工具编写的类似功能软件小几倍甚至是几十倍。并且 aardio 生成的软件可以完美兼容 XP，Vista，Win7，Win8，Win10，Win11...... 等所有流行桌面操作系统。

aardio 不仅仅可以开发桌面软件，也可以用于开发网站，aardio 可以直接支持与 PHP 类似的 HTML 模板语法，提供语言级别的模板解析，一个 aardio 源码文件，可以放 aardio 源码，也可以直接放 HTML，或者放 HTML，aardio 混合的模板代码，aardio 都能完美支持。并且 aardio可以使用几句代码就可以创建一个微型嵌入式 HTTP 服务端（可以集成 WebSocket 服务端），因此 aardio 可以非常方便地为浏览器控件提供 HTTP 服务端，并且像写网站那样写桌面客户端软件。

区别于其他动态语言，aardio 可以非常方便地支持真多线程，并且提供大量多线程函数库、演示范例等等。

aardio 处理 Unicode 编码非常方便且简洁高效，例如在 aardio 调用基于 UTF-16编码 的 Unicode WinAPI，或者调用其他基于 UTF-8 编码的接口，我们不需要多写一句代码处理复杂的编码问题。在 aardio 中字符串拥有独特的 UTF 自动标记特性，可以实现自动识别多种不同编码，虽然 aardio 默认编码为UTF-8，但字符串中可以存储二进制数据、UTF-8编码文本、UTF-16编码文本等等，所以 aardio 不但可以完美支持 Unicode，也可以方便地处理二进制数据、或者其他编码的文本。类似这样的创造性设计在 aardio 中随处可见，多次有用户反馈，学习 aardio 让自己的编程思路变得更开阔，使用其他编程语言也因此深受启发。

[下载最新版本](https://ide.update.aardio.com/releases/aardio.7z)