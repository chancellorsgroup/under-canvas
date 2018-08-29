const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'UnderCanvas',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  devServer: {
    contentBase: path.join(__dirname, 'test'),
    compress: true,
    port: 9000,
  },
};
