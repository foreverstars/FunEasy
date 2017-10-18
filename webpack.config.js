const webpack = require('webpack');
const path =  require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./index.js",
	output:{
		path :  path.resolve(__dirname, 'dist'),
		filename : "bundle.js"
	},
	module:{
		loaders: [
			{	
				test : /\.js$/,
				loader:"babel-loader",
				exclude:/node_modules/,
				query:{
					presets: [ "es2015","react"]
				}
			},
			{
                test :  /\.css$/,
                loader: "style-loader!css-loader"
            },
			{
				test :  /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
     		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(),     				//生成一个HTML5文件，其中包括使用脚本标记的所有webpack包。

		new webpack.HotModuleReplacementPlugin(),   //热加载模块
		
		new webpack.optimize.UglifyJsPlugin({       //代码编译后压缩
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		}),
											 
		new webpack.DefinePlugin({					//定义插件允许您创建可以在编译时配置的全局常量,这对于允许开发构建和发布版本之间的不同行为非常有用。
			PRODUCTION: JSON.stringify(true),	   //例如, 您可以使用一个全局常量来确定日志是否发生了,也许您在开发构建中执行日志记录,而不是在发布版本中执行日志记录。
			VERSION: JSON.stringify("123456"),
			BROWSER_SUPPORTS_HTML5: true,
		}),

//		new webpack.optimize.CommonsChunkPlugin({name:'common'}),

		new CopyWebpackPlugin([               	   //复制文件夹到输出目录
			{
				from: 'src/image',
				to: 'image',
			},
			{
				from: 'src/mock',
				to: 'mock',
			}
		])
	],
	
	// resolve: {										//可修改文件的引入路径
	// 	alias: {
	// 	//'radmin': path.resolve(__dirname, './src/js/components'),
	// 		'jsLib': path.resolve(__dirname, './src/js')
	// 	},
	// 	extensions: ['', '.js']
    // },
	
	devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        proxy: {
            '/v2': {
              target: 'https://api.douban.com',
              pathRewrite: {'^/' : '/'},
              changeOrigin: true
			},
			 '/v1': {
              target: 'http://tingapi.ting.baidu.com/',
              pathRewrite: {'^/' : '/'},
              changeOrigin: true
            }
         }
    }
}
	