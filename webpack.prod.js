const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const production = process.env.NODE_ENV === 'production';

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    contentBase: ' ./dist',
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    port: 3000,
    compress: production,
    inline: !production,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: true,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
    },
  },
});
