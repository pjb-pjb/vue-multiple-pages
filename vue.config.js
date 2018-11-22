module.exports = {
	pages: {
		page1: {
			entry: 'src/pages/page1/main.js',
			template: 'src/pages/page1/index.html',
			filename: 'page1.html'
		},
		page2: {
			entry: 'src/pages/page2/main.js',
			template: 'src/pages/page2/index.html',
			filename: 'page2.html'
		}
	},
	runtimeCompiler: true,
	devServer: {
		historyApiFallback: {
			rewrites: [{
					from: /\/page1/,
					to: '/page1.html'
				},
				{
					from: /\/page2/,
					to: '/page2.html'
				}
			]
		}
	}
};