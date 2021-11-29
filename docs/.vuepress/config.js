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
				href: 'favicon.ico'
			}
		]
	],
	//主题配置
	themeConfig: {
		logo: './favicon.ico',
		navbar: [],
		repo: 'WDNLRuny/aardio-docs',
		lastUpdatedText:"上次更新",
		editLinkText:"编辑此页",
		contributorsText:"贡献者",
		sidebar: [{
			text: '基础',
			children: [{
				text: '介绍',
				link: '/',
			}]
		}],
	},
}
