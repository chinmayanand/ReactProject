const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
	  {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
	  {
		 test: /\.(gif|svg|jpg|png)$/,
      loader: "file-loader", 
	  }
    ]
  },
  node: {
    
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [htmlPlugin]
};