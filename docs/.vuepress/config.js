module.exports = {
	lang: 'zh-CN',
	title: 'aardio',
	description: 'aardio 文档',
	base: '/aardio-docs/',
	head: [
		// 设置 favor.ico，.vuepress/public 下
		[
			'link', {
				rel: 'icon',
				href: 'favicon.ico'
			}
		]
	],
	//主题配置
	themeConfig: {
		logo: './favicon.ico',
		navbar: [{
			text: 'GitHub',
			link: 'https://github.com/WDNLRuny/aardio-docs',
			target: '_blank'
		}, ],
		sidebar: [{
			text: '简介',
			link: '/',
		}, ]
	},
}
