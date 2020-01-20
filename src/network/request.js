import axios from 'axios';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store/storeIndex'

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
    //表示请求成功
    if(res.status == 200){
      const authInfo = res.headers.authorization;
      store.commit('saveAuthInfo',authInfo);
      if(res.data.CODE == 'OK'){
        return {status:'OK',message:res.data.MESSAGE,content:res.data.BODY};
      }else{
        return {status:'ERROR',message:res.data.MESSAGE,content:res.data.BODY};
      }
    }
    // 调用异常的情况
    return {status:'ERROR',message:res.status,content:''};
  },error => {
    NProgress.done();
    return {status:'ERROR',message:error,content:''};
  });
  return instance(config);
}

export function commonRequestNoLoadding(config) {
  const instance = axios.create({
    baseURL:'/icop',
    timeout:10000,
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
    if(res.status == 200){
      if(res.data.CODE == 'OK'){
        return {status:'OK',message:res.data.MESSAGE,content:res.data.BODY};
      }else{
        return {status:'ERROR',message:res.data.MESSAGE,content:res.data.BODY};
      }
    }
    // 调用异常的情况
    return {status:'ERROR',message:res.status,content:''};
  },error => {
    return {status:'ERROR',message:error,content:''};
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
