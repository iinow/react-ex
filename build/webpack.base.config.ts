import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { CheckerPlugin } from 'awesome-typescript-loader'

type Rebpack = webpack.Configuration | { mode: 'local' | 'dev' | 'real' }

const config: Rebpack = {
  name: 'react-ex',
  mode: 'none',
  entry: {
    app: path.resolve(__dirname, '../src/App.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, '../src/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React + Typescript 예제!',
      filename: path.join(__dirname, '../dist/index.html'),
      template: path.join(__dirname, '../src/index.html')
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true
    }),
    new CheckerPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../dist')
  }
}

export { config as BaseConfig, Rebpack }
