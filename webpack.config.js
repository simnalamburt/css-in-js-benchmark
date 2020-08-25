const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

const appDirectory = path.resolve(__dirname);

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: './src/index',
  output: {
    path: path.resolve(appDirectory, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:8]'
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        include: [path.resolve(appDirectory, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  loose: true,
                  modules: false,
                  exclude: ['transform-typeof-symbol'],
                  targets: {
                    browsers: [
                      'chrome 38',
                      'android 4',
                      'firefox 40',
                      'ios_saf 7',
                      'safari 7',
                      'ie 10',
                      'ie_mob 11',
                      'edge 12',
                      'opera 16',
                      'op_mini 12',
                      'and_uc 9',
                      'and_chr 38'
                    ]
                  }
                }
              ],
              '@babel/preset-react',
              '@babel/preset-flow'
            ],
            plugins: [
              '@babel/plugin-transform-flow-strip-types',
              ['babel-plugin-transform-react-remove-prop-types', { mode: 'wrap' }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
              '@babel/plugin-proposal-nullish-coalescing-operator',
              'styled-jsx/babel'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
};
