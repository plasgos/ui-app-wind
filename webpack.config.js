// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const appDirectory = path.resolve(__dirname);
// const {presets, plugins} = require(`${appDirectory}/babel.config.js`);
// const compileNodeModules = [
//   // Add every react-native package that needs compiling
//   // 'react-native-gesture-handler',
// ].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));
// console.log('🚀 ~ compileNodeModules:', compileNodeModules);

// const babelLoaderConfiguration = {
//   test: /\.(js|jsx|ts|tsx)$/,
//   include: [
//     path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
//     path.resolve(__dirname, 'node_modules/react-native-elements'),
//     path.resolve(__dirname, 'App.jsx'),
//     path.resolve(__dirname, 'src'),
//     path.resolve(__dirname, 'components'),
//     path.resolve(__dirname, 'node_modules/react-native-ratings'),
//     path.resolve(__dirname, 'node_modules/react-native-toast-message'),
//   ],
//   use: {
//     loader: 'babel-loader',
//     options: {
//       cacheDirectory: true,
//       presets,
//       plugins,
//     },
//   },
// };

// const svgLoaderConfiguration = {
//   test: /\.svg$/,
//   use: [
//     {
//       loader: '@svgr/webpack',
//     },
//   ],
// };

// const imageLoaderConfiguration = {
//   test: /\.(gif|jpe?g|png|svg)$/,
//   use: {
//     loader: 'url-loader',
//     options: {
//       name: '[name].[ext]',
//     },
//   },
// };

// // const tsLoaderConfiguration = {
// //   test: /\.(ts)x?$/,
// //   exclude: /node_modules|\.d\.ts$/, // this line as well
// //   use: {
// //     loader: 'ts-loader',
// //     options: {
// //       compilerOptions: {
// //         noEmit: false, // this option will solve the issue
// //       },
// //     },
// //   },
// // };

// // const tsLoaderConfiguration = {
// //   test: /\.(js|jsx)$/,
// //   exclude: /node_modules/,
// //   use: {
// //     loader: 'babel-loader',
// //     options: {
// //       cacheDirectory: true,
// //       presets,
// //       plugins,
// //       // presets: ['@babel/preset-env', '@babel/preset-react'],
// //     },
// //   },
// // };

// module.exports = {
//   entry: {
//     app: path.join(__dirname, 'index.web.js'),
//   },
//   output: {
//     path: path.resolve(appDirectory, 'dist'),
//     publicPath: '/',
//     filename: 'rnw.bundle.js',
//   },
//   resolve: {
//     extensions: [
//       '.web.tsx',
//       '.web.ts',
//       '.tsx',
//       '.ts',
//       '.web.js',
//       '.js',
//       '.jsx',
//     ],
//     alias: {
//       'react-native$': 'react-native-web',
//     },
//   },
//   module: {
//     rules: [
//       babelLoaderConfiguration,
//       imageLoaderConfiguration,
//       svgLoaderConfiguration,
//       // tsLoaderConfiguration,
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, 'index.html'),
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.DefinePlugin({
//       __DEV__: JSON.stringify(true),
//     }),
//   ],
// };

const path = require('path');
const webpack = require('webpack');
const appDirectory = path.resolve(__dirname);
const {presets, plugins} = require(`${appDirectory}/babel.config.js`);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'rnw.bundle.js',
  },
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.js',
      '.js',
      '.jsx',
    ],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
          path.resolve(__dirname, 'node_modules/react-native-elements'),
          path.resolve(__dirname, 'App.jsx'),
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'components'),
          path.resolve(__dirname, 'node_modules/react-native-ratings'),
          path.resolve(__dirname, 'node_modules/react-native-toast-message'),
          path.resolve(__dirname, 'assets'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets,
            plugins,
          },
        },
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader', // or directly file-loader
        include: path.resolve(
          __dirname,
          'node_modules/react-native-vector-icons',
        ),
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],
};
