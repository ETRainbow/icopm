module.exports = {
  /** 配置webback */
  configureWebpack:{
    resolve:{
      // 配置别名
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network'
      }
    }
  },
 //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    // 是否自动弹出浏览器
    //open:true,
   /* proxyTable:{
      '/api':{
        target:'https://sm.ms/api/v2',
        changeOrigin:true,
        pathRewrite:{
          //'^/api':''
          '^/api':'http://localhost:8080'
        }
    }*/

    proxy: {
      '/api':{
        target:'https://sm.ms/api/v2',
        changeOrigin:true,
        pathRewrite:{
          //'^/api':''
          '^/api':'http://localhost:8080'
        }
      },
          /*'/icop':{
              target:'http://localhost:10001/icop',
              changeOrigin:true,
              pathRewrite:{
                  '^/icop':''
              }
          },*/
          '/ms':{
              target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
              changeOrigin: true
          }
      }
  }
}
