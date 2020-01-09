import {commonRequest,commonRequestNoLoadding} from 'network/request';

/**
 * icopm后台管理登录请求。
 *
 */
export function requestLogin(parameters) {
  console.log("parameters=" + parameters);
  return commonRequest({
    headers: {
      'Content-Type': 'application/json',
    },
    url:'/loginSvc/login.json',
    method:'post',
    data:parameters,
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
 * icopm后台管理请求权限等信息。
 *
 */
export function requestUserInfo() {
  return commonRequest({
    url:'/loginSvc/loginSvc.json'
  });
}
