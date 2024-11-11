const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    filename: 'main.js' // the name of the bundle
  },
  resolve: {
    // modules: [__dirname, 'src', 'node_modules', 'src/components'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
            '@app': path.resolve(__dirname, './src/'),
            '@pages': path.resolve(__dirname, './src/'),
            '@components': path.resolve(__dirname, './src/components/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // to import index.html file inside index.js
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,  
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
