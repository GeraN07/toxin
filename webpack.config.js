const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const fs = require('fs')
const PATHS = {
  src: path.join(__dirname, 'src/'),
  dist: path.join(__dirname, 'dist/'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () =>{
const config = { 
  splitChunks:{
  chunks:'all'
  }
  }

  if(isProd){
    config.minimizer = [
      new OptimizeCssAssetPlugin(),
      new TerserWebpackPlugin()
    ]
    
    }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}` 
const cssLoaders = extra => {
  const loaders = [
    {
    loader: MiniCssExtractPlugin.loader,
    options: {
    hmr: isDev,
    realoadALL:true  
    },
  },
  'css-loader'
]
if (extra){
  loaders.push(extra)
}
  return loaders
}

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode:'development',
  entry:'../src/index.js',
  output: {
    filename:filename('js'),
    path:path.resolve(__dirname, 'dist')
  },
  resolve:{
    extensions:['.js','.json','.png'],
    alias:{
      '@models': path.resolve(__dirname,'src/models'),
      '@': path.resolve(__dirname,'src'),
    }
  },
  optimization:optimization(),
  devServer:{
    port: 4200,
    hot: isDev
  },
  plugins: [
    ...PAGES.map(page => new HTMLWebpackPlugin ({
    template: `${PAGES_DIR}/${page}`,
    filename: `./${page.replace(/\.pug/,'.html')}`
  })),
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
     {
       from: path.resolve(__dirname,'src/favicon.ico'),
       to: path.resolve(__dirname,'dist')
     } 
    ],
  }),
  new MiniCssExtractPlugin({
    filename:filename('css')
  }),

  
  
  ],
  module: {
    rules:[
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
          }
      },
      {
        test:/\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.css$/,
        use:cssLoaders()

      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use:['file-loader']
      },
      {
        test:/\.(ttf|woff|woff2|eot)$/,
        use:['file-loader']
      },
      {
        test: /\.xml$/,
        use:['xml-loader']
      },
      {
        test:/\.csv$/,
        use:['csv-loader']
      }
      
    ]

  }
}