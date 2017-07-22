module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: __dirname + '/javascripts/'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: [
        'ts-loader'
      ]
    }]
  }
}