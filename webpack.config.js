var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'spinaNavigation',
    libraryTarget: 'umd'
  },
  externals: {
    stimulus: {
      commonjs: 'stimulus',
      commonjs2: 'stimulus',
      amd: 'stimulus',
      root: 'Stimulus'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
};
