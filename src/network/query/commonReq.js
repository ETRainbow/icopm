import {commonRequest,commonRequestNoLoadding} from 'network/request';

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
    data:JSON.stringify({width:'100',height:'32',charNum:'4'}),
    responseType:'json'
  });
}

/**
 * 文件上传
 *
 */
export function uploadFile (files){
  return commonRequestNoLoadding({
    url:'/sftp/uploadFile.json',
    method:'post',
    data:files,
    responseType:'json'
  });
}
