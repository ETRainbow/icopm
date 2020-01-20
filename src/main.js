import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import "babel-polyfill";
import store from './store/storeIndex';
// 引入nprogress插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
Vue.prototype.$axios = axios;

const i18n = new VueI18n({
    locale: 'zh',
    messages
});

//使用导航卫士钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {

  //判断是否进行权限控制
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.debug("是否进行访问权限校验："+to.meta.requiresAuth);
    const sources =JSON.parse(sessionStorage.getItem("sources"));
    const toPath = to.path;
    const result = sources.filter(function (currentValue) {
      return currentValue === toPath;
    });
    //用户没有匹配的访问的根资源权限，提时无权限！
    if(result.length > 0){
      next();
    }else {
      next({
        path: '/403'
      });
    }
  } else {
    console.debug("是否进行访问权限校验："+to.meta.requiresAuth);
    next() // make sure to always call next()!
  }

  /*// 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
  if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
    Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
      confirmButtonText: '确定'
    });
  } else {
    next();
  }*/
});


new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');
