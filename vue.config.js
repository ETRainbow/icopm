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
  baseUrl: './',
  productionSourceMap: false,
  devServer: {
      proxy: {
          '/icop':{
              target:'http://localhost:10001/icop',
              changeOrigin:true,
              pathRewrite:{
                  '^/icop':''
              }
          },
          '/ms':{
              target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
              changeOrigin: true
          }
      }
  }
}
