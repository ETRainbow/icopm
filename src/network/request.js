import axios from 'axios';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store/storeIndex'
import {Message} from 'element-ui';

export function commonRequest(config) {
  const instance = axios.create({
    //baseURL:'http://localhost:10001/icop',
    // 这个地方会用到vue.congif.js中的代理服务的地址
    baseURL:'/icop',
    timeout:5000,
    responseEncoding:'utf8',
  });
  instance.interceptors.request.use(config=>{
    config.headers.authorization = sessionStorage.getItem("anthInfo");
    NProgress.start();
    return config;
  },error => {
    NProgress.done();
    return config;
  });
  instance.interceptors.response.use(res=>{
    NProgress.done();

    if(res.data.CODE == 'OK'){
      const authInfo = res.headers.authorization;
      console.log("更新token" + authInfo);
      store.commit('saveAuthInfo',authInfo);
      return res.data.BODY;
    }
    Message.error(res.data.MESSAGE);
  },error => {
    NProgress.done();
    Message.error(error+"");
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
    config.headers.authorization = sessionStorage.getItem("authInfo");
    return config;
  },error => {
    return config;
  });
  instance.interceptors.response.use(res=>{
    //表示请求成功
    if(res.data.CODE == 'OK'){
      const authInfo = res.headers.authorization;
      console.log("更新token" + authInfo);
      store.commit('saveAuthInfo',authInfo);
      return res.data.BODY;
    }else{
      Message.error(res.data.MESSAGE+"");
    }
  },error => {
    Message.error(error+"");
  });
  return instance(config);
}

const smsm ="/smms";
export function testReq(config) {
  const instance = axios.create({
    //baseURL:'http://localhost:10001/icop',
    // 这个地方会用到vue.congif.js中的代理服务的地址
    //baseURL:'/api',
    //baseURL:process.env.VUE_APP_BASE_API, //让后端进行跨域处理
    //baseURL:'https://sm.ms/api/v2',
    timeout:1000000,

    responseEncoding:'utf8',
  });
  instance.interceptors.request.use(config=>{
    config.headers.authorization = "V0RLYj7PRasfMMLkm3Y1asELGs5QqgET";
    return config;
  },error => {
    return config;
  });
  instance.interceptors.response.use(res=>{
    console.log("请求返回："+res.data);
  },error => {
    console.log("请求返回："+error.data);
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
