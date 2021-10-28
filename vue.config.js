const autoprefixer = require('autoprefixer')
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  // outputDir: 'dist',
  outputDir: process.env.outputDir,
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // devServer: {
  //   open: true,
  //   // host: 'm.boarstar.com',
  //   host: '0.0.0.0',
  //   port: 80,
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   },
  //   sockHost: 'http://localhost:1024/',
  //   disableHostCheck: true,
  //   proxy: {
  //     '/api': {
  //       target: process.env.VUE_APP_API_PROXY,
  //       changeOrigin: true, // 允许websockets跨域
  //       // ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  css: {
    extract: !!IS_PRODUCTION,
    sourceMap: false,
    modules: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer()
        ]
      },
      stylus: {
        import: '~@/assets/styles/variables.styl'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'views': resolve('src/views'),
        'components': resolve('src/components'),
        'api': resolve('src/api'),
        'assets': resolve('src/assets'),
        'config': resolve('src/config'),
        'filter': resolve('src/filter')
      }
    }
  },
  chainWebpack (config) {
    config.plugins.delete('prefetch')
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
    config.module.rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: '65-90', speed: 4 },
        gifsicle: { interlaced: false }
      })
      .end()
    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
    if (IS_PRODUCTION) {
      config.plugin('analyzer').use(BundleAnalyzerPlugin)
      config.plugin('html').tap(args => {
        args[0].minify.minifyCSS = true
        return args
      })
      config
        .plugin('compression')
        .use(CompressionWebpackPlugin)
        .tap(() => [
          {
            test: /\.js$|\.html$|\.css/, // 匹配文件名
            threshold: 10240, // 超过10k进行压缩
            deleteOriginalAssets: false // 是否删除源文件
          }
        ])
      config.optimization.minimizer([
        new UglifyjsWebpackPlugin({
          sourceMap: false,
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          }
        })
      ])
    }
  }
}
