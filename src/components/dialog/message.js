import {Message} from  'element-ui';

/**
 *  用来处理网络请求相应的异常处理！
 * @param param
 */
export function handlerNetError(param){
  console.log("handlerNetError---");
  console.log(param);
  Message.info(param);
}

