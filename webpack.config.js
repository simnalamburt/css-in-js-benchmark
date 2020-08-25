module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    publicPath: '/dist/'
  },
  performance: {
    // This benchmark uses lots of libraries
    maxEntrypointSize: 800000,
    maxAssetSize: 800000
  }
};
