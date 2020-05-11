import {commonRequest,commonRequestNoLoadding,testReq} from 'network/request';
import axios from "axios";
import store from "../../store/storeIndex";
import {Message} from "element-ui";

/**
 * icopm后台管理登录请求。
 *
 */
export function requestLogin(parameters) {
  console.log("parameters=" + parameters);
  return commonRequest({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    url:'/loginSvc/login.json',
    method:'post',
    params:{
      username: parameters.username,
      password: parameters.password,
      validateCode: parameters.validateCode,
      validateType: parameters.validateType,
    },
    responseType:'json'
  });
}

/**
 * icopm注册请求。
 *
 */
export function requestRegister(parameters) {
  console.log("parameters=" + parameters);
  return commonRequest({
    headers: {
      'Content-Type': 'application/json',
    },
    url:'/register/registerICOPM.json',
    method:'post',
    data:parameters,
    responseType:'json'
  });
}


/**
 *  验证码获取
 *
 */
export function requestVerificationCode() {
  return commonRequestNoLoadding({
    headers: {
      'Content-Type': 'application/json',
    },
    url:'/getValidateCode/getYzm.json',
    method:'post',
    data:JSON.stringify({width:'100',height:'32',charNum:4}),
    responseType:'json'
  });
}

/**
 * 文件上传
 *
 */

export function uploadFile (files){
  // return commonRequestNoLoadding({
  return testReq({
    //url:'/sftp/uploadFile.json',
    url:'https://sm.ms/api/v2/upload',
    method:'post',
    data:files,
    responseType:'json'
  });
}


export function queryFileList(param) {
  return commonRequestNoLoadding({
    url:'/sftp/queryDownLoadList.json',
    method:'post',
    data:param,
    responseType:'json'
  });
}

/**
 * b博文的发布保存
 * @param blog
 * @returns {*}
 */
export function saveOrPublishOfBolg(blog) {
  return commonRequest({
    headers: {
      'Content-Type': 'application/json',
    },
    url:'/BlogControlSvc/saveBlog.json',
    method:'post',

    data:JSON.stringify(blog),
    params:{
      userId:sessionStorage.getItem("userId")
    },
    responseType:'json'
  });
}

/**
 *
 * 标签查询
 * @param blog
 * @returns {*}
 */
export function queryLabel(param) {
  return commonRequest({
    headers: {
      'Content-Type': 'application/json',
    },
    url:'/BlogControlSvc/queryyLabel.json',
    method:'post',
    data:JSON.stringify(param),
    params:{
      userId:sessionStorage.getItem("userId")
    },
    responseType:'json'
  });
}


export function queryBlogDetailSvc(param) {
  return commonRequest({
    headers: {
      'Content-Type': 'application/json',
    },
    url:'/BlogControlSvc/queryBlog.json',
    method:'post',
    data:JSON.stringify(param),
    params:{
      userId:sessionStorage.getItem("userId")
    },
    responseType:'json'
  });
}
