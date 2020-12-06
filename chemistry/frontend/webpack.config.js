const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
      },
      {
        test: /\.(styl)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' }
          
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },

  devServer: {
    contentBase: './public',
    watchContentBase: true,
    port: 3000,
    inline: true,
    hot: true,
  },
};