module.exports = {
	entry: "./index.js",
	output:{
		path :  __dirname,
		filename : "dist/bundle.js"
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
			},{
				test : /\.(png|jpg|gif|ttf)$/,
				loader: "file-loader"
			}
		]
	}
}
	