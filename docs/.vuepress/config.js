//代码块目前不支持aardio，使用js代替

module.exports = {
	title: 'aardio',
	description: 'aardio 文档',
	lang: 'zh-CN',
	base: '/aardio-docs/',
	head: [
		// 设置 favor.ico，.vuepress/public 下
		[
			'link', {
				rel: 'icon',
				href: './favicon.ico'
			}
		]
	],
	//主题配置
	themeConfig: {
		logo: './favicon.ico',
		navbar: [{
			text: '官网',
			link: 'https://www.aardio.com/',
		}],
		repo: 'WDNLRuny/vuepress-aardio',
		docsBranch: 'master',
		docsDir: 'docs',
		lastUpdatedText: "上次更新",
		editLinkText: "编辑此页",
		contributorsText: "贡献者",
		toggleDarkMode: "切换夜间模式",
		toggleSidebar: "切换侧边栏",
		openInNewWindow: "在新窗口中打开",
		tip: "提示",
		warning: "警告",
		danger: "危险",
		sidebar: [{
			text: '基础',
			children: [
				'/',
				'/base/installation',
				'/base/example',
				'/base/grammar',
				'/base/variable',
				'/base/dataType',
			]
		}],
	},
}
