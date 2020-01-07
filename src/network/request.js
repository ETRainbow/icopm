import axios from 'axios';

export function commonRequest(config) {
  const instance = axios.create({
    //baseURL:'http://localhost:10001/icop',
    // 这个地方会用到vue.congif.js中的代理服务的地址
    baseURL:'/icop',
    timeout:5000,
    responseEncoding:'utf8'
  });
  instance.interceptors.request.use(config=>{
    return config;
  },error => {
    return config;
  });
  instance.interceptors.response.use(res=>{
    if('OK' != res.data.CODE){

    }
    return res.data;
  },error => {
    return error;
  });
  return instance(config);
}

export function commonRequestNoLoadding(config) {
  const instance = axios.create({
    baseURL:'/icop',
    timeout:5000,
    responseEncoding:'utf8'
  });
  instance.interceptors.request.use(config=>{
    return config;
  },error => {
    return config;
  });
  instance.interceptors.response.use(res=>{
    if('OK' != res.data.CODE){
      return res;
    }
    return res.data;
  },error => {
  });
  return instance(config);
}



























/*
//commonRequest 使用示例
import {commonRequest} from './network/request'
commonRequest({
  url:'/ip'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log("commonRequest报错信息" + err);
});
 */


/*
export function request3(config) {
  const instance = axios.create({
    baseURL: 'https://www.httpbin.org',
    timeout: 3000
  })
  instance(config.baseConfig)
    .then(res => {
      console.log("request3 res:"+res);
      config.success(res);
    })
    .catch(err => {
      console.log("request3 res:"+err);
      config.failure(err);
    })
}
*/
//使用示例：
/***/
/*request3({
  url:'/ip',
  type:'get',
  baseConfig:{

  },
  success:function (res) {
    console.log("request3 res:"+res)
  },
  failure:function (err) {
    console.log("request3 err:"+err)
  }
})*/
