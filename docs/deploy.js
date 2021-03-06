// 公共使用

//关键词
export const keywords = [{
		key: "var",
		explain: "用于定义局部变量"
	},
	{
		key: "def",
		explain: "用于定义关键字"
	},
	{
		key: "null",
		explain: "用于表示空值"
	},
	{
		key: "and not or",
		explain: "逻辑运算符"
	},
	{
		key: "begin end",
		explain: "用于包含语句块"
	},
	{
		key: "false true",
		explain: "用于表示布尔值"
	},
	{
		key: "if else elseif",
		explain: "用于条件判断语句"
	},
	{
		key: "select case",
		explain: "用于条件判断语句"
	},
	{
		key: "for in",
		explain: "用于循环语句"
	},
	{
		key: "while do",
		explain: "用于循环语句"
	},
	{
		key: "break continue",
		explain: "循环中断语句"
	},
	{
		key: "try catch",
		explain: "用于捕获异常"
	},
	{
		key: "class ctor",
		explain: "用于创建类"
	},
	{
		key: "function",
		explain: "用于创建函数"
	},
	{
		key: "return",
		explain: "用于函数中返回值"
	},
	{
		key: "namespace",
		explain: "用于创建或打开名字空间"
	},
	{
		key: "import",
		explain: "用于引用库"
	},
	{
		key: "with",
		explain: "用于打开名字空间"
	},
	{
		key: "this",
		explain: "用于在类内部表示当前实例对象"
	},
	{
		key: "owner",
		explain: "用于成员函数中表示调用函数的主体对象"
	},
	{
		key: "global",
		explain: "用于表示全局名字空间"
	},
	{
		key: "self",
		explain: "用于表示当前名字空间"
	}
];


//关键函数
export const keyFunction = [{
		key: "type",
		explain: "关键函数,用于获取对象的数据类型"
	},
	{
		key: "eval",
		explain: "运行aardio代码，并计算表达式的值"
	},
	{
		key: "assert",
		explain: "断言函数"
	},
	{
		key: "assertf",
		explain: "反断言函数"
	},
	{
		key: "error",
		explain: "抛出异常"
	},
	{
		key: "tostring",
		explain: "用于转换参数为字符串"
	},
	{
		key: "topointer",
		explain: "用于转换参数为指针"
	},
	{
		key: "tonumber",
		explain: "用于转换参数为数值"
	},
	{
		key: "loadcode",
		explain: "用于加载代码"
	},
	{
		key: "loadcodex",
		explain: "用于加载执行代码"
	},
	{
		key: "dumpcode",
		explain: "用于编译代码"
	},
	{
		key: "rget",
		explain: "用于选择返回值"
	},
	{
		key: "collectgarbage",
		explain: "用于回收内存"
	},
	{
		key: "invoke",
		explain: "用于调用函数"
	},
	{
		key: "call",
		explain: "用于调用函数"
	},
	{
		key: "callex",
		explain: "用于调用函数"
	},
	{
		key: "sleep",
		explain: "用于休眠"
	},
	{
		key: "execute",
		explain: "用于调用系统命令"
	},
	{
		key: "setlocale",
		explain: "用于区域设置"
	},
	{
		key: "setprivilege",
		explain: "用于指定进程权限"
	}
]


//操作符,按照优先级排序
// associativity 结核性：1.从左到右 , 2.从右到左
// type          操作符类型：1.成员操作符, 2.算术运算符,3.连接运算符,4.等式运算符
export const operator = [{
		operator: [{
				key: ".",
				example: "var a = tab.member",
				explain: "成员操作符"
			},
			{
				key: "[]",
				example: 'var a = tab["member"]',
				explain: "下标操作符"
			},
			{
				key: "[[]]",
				example: "var a = tab.member",
				explain: `直接下标操作符
			
			获取或设置对象成员，不会调用元方法。
可用此操作符在元方法中避免递归调用元方法。`
			}
		],
		associativity: 1, // 结核性：1.从左到右 , 2.从右到左
		type: 1, // 操作符类型：1.成员操作符,
		explain: "用于访问table成员的操作符。"
	},
	{
		operator: ["()"],
		associativity: 1,
		explain: "用于组合表达式并改变优先级，或用于函数调用。"
	},
	{
		operator: ["**"],
		operator: [{
			key: "**",
			explain: "幂"
		}],
		type: 2,
		associativity: 2,
		explain: "乘方运算"
	},
	{
		operator: ["!", "not"],
		associativity: 1,
		explain: "逻辑非"
	},
	{
		operator: ["-"],
		associativity: 1,
		explain: "取负"
	},
	{
		operator: ["~"],
		associativity: 1,
		explain: "按位取反"
	},
	{
		operator: [{
				key: "*",
				explain: "乘"
			},
			{
				key: "/",
				explain: "除"
			},
			{
				key: "%",
				explain: "模"
			}
		],
		type: 2,
		associativity: 1,
		explain: "算术运算符"
	},
	{
		operator: [{
				key: "+",
				explain: "加"
			},
			{
				key: "-",
				explain: "减(二元运算符)、取负(单目运算符)"
			},
		],
		type: 2,
		associativity: 1,
		explain: "算术运算符"
	},
	{
		operator: ["<<", ">>", ">>>"],
		associativity: 1,
		explain: "按位运算符"
	},
	{
		operator: ["&", "^", "|"],
		associativity: 1,
		explain: "按位运算符"
	},
	{
		operator:[{
			key: "++",
			explain: "连接运算符"
		}],
		associativity: 2,
		type:3,
		explain: "连接运算符"
	},
	{
		operator: ["<", "<=", ">=", ">"],
		associativity: 1,
		explain: "关系运算符"
	},
	{
		operator:[
			{
				key: "==",
				explain: "等式运算符"
			},
			{
				key: "!=",
				explain: "不等式运算符"
			},
			{
				key: "===",
				explain: "恒等运算符"
			},
			{
				key: "!==",
				explain: "非恒等运算符"
			},
		],
		associativity: 1,
		type:4,
		explain: "等于、不等于、恒等于、非恒等于"
	},
	{
		operator: ["&&", "and"],
		associativity: 1,
		explain: "逻辑与"
	},
	{
		operator: ["&&", "and"],
		associativity: 1,
		explain: "逻辑与"
	},
	{
		operator: ["||", "or"],
		associativity: 1,
		explain: "逻辑或"
	},
	{
		operator: ["?"],
		associativity: 1,
		explain: "逻辑与、该运算符类似于and但优先级更低"
	},
	{
		operator: [":"],
		associativity: 1,
		explain: "逻辑或、该运算符类似于or但优先级更低"
	},
	{
		operator: ["=", "+=", "-=", "*=", "/=", "&=", "^=", "|=", "<<=", ">>="],
		associativity: 2,
		explain: "aardio中赋值操作符不能用于表达式并返回值,只能用于独立的赋值语句"
	}
]
