'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const themeVariable = require('./src/styles/theme/variable.ts');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isProduction = process.env.NODE_ENV !== 'development';
const HashedModuleIdsPlugin = require('webpack').HashedModuleIdsPlugin
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
require("./color");
// eslint-disable-next-line @typescript-eslint/no-var-requires
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    // host: '0.0.0.0',
    port: 9001,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  configureWebpack: config => {
    const plugins = [];
    if (isProduction) {
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false, // 去掉注释
            },
            warnings: false,
            compress: {
              // eslint-disable-next-line @typescript-eslint/camelcase
              drop_console: true,
              // eslint-disable-next-line @typescript-eslint/camelcase
              drop_debugger: false,
              // eslint-disable-next-line @typescript-eslint/camelcase
              pure_funcs: ['console.log']//移除console
            }
          }
        })
      )
      plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.(js|css|html)$/,// 匹配文件名
          threshold: 1, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
          minRatio: 0.8 // 压缩比
        })
      )
      // 用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
      plugins.push(
        new HashedModuleIdsPlugin()
      )
        // 开启分离js
        config.optimization = {
          runtimeChunk: 'single',
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 1000 * 60,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name(module) {
                  // 排除node_modules 然后吧 @ 替换为空 ,考虑到服务器的兼容
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                  return `npm.${packageName.replace('@', '')}`
                }
              }
            }
          }
        }
        // 取消webpack警告的性能提示
        config.performance = {
          hints: 'warning',
          //入口起点的最大体积
          maxEntrypointSize: 1000 * 500,
          //生成文件的最大体积
          maxAssetSize: 1000 * 1000,
          //只给出 js 文件的性能提示
          assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
          }
        }
    }
    return {
      plugins,
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
         // eslint-disable-next-line @typescript-eslint/no-var-requires
         require("postcss-px-to-viewport")({
          unitToConvert: "px",  // 需要转换的单位，默认为"px"
          viewportWidth: 1920,  // 视窗的宽度，对应pc设计稿的宽度，一般是1920
          viewportHeight: 1080,// 视窗的高度，对应的是我们设计稿的高度
          unitPrecision: 3,     // 单位转换后保留的精度
          propList: [       // 能转化为vw的属性列表
           "*"
          ],
          viewportUnit: "vw",       // 希望使用的视口单位
          fontViewportUnit: "vw",       // 字体使用的视口单位
          selectorBlackList: ['.login-code-input', '.login-btn'],    // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1,     // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: false,        // 媒体查询里的单位是否需要转换单位
          replace: true,        // 是否直接更换属性值，而不添加备用属性
          exclude: /(\/|\\)(node_modules)(\/|\\)/,      // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
         })
        ]
      },
      less: {
        modifyVars: {
          ...themeVariable
        },
        javascriptEnabled: true,
      },
    }
  },
  chainWebpack(config) {
    config.module
    .rule('svg')
    .exclude.add(resolve('src/assets/icons'))
    .end()
  config.module
    .rule("svg-sprite")
    .test(/\.svg$/)
    .include
    .add(resolve("src/assets/icons"))
    .end()
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
      symbolId: "icon-[name]",
      include: ["src/assets/icons"]
    })
    .end()
    .before("svg-sprite-loader")
    .use("svgo-loader")
    .loader("svgo-loader")
    .end()
  }
}