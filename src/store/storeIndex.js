import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex);

// 创建对象
const store = new Vuex.Store({
  state:{
    userId:'',
    roleInfoList:'',
    userInfo:'',
    menuInfo:{},
    authInfo:''
  },
  mutations:{
    initMenuInfo(state){
      state.userId=sessionStorage.getItem("userId");
      state.menuInfo=JSON.parse(sessionStorage.getItem("menuInfo"));
    },
    destoryStateInfo(state){
      state.userId='';
      state.roleInfoList='';
      state.userInfo='';
      state.menuInfo={};
    },
    saveAuthInfo(state,authInfo){
      state.authInfo=authInfo;
      sessionStorage.setItem("authInfo",authInfo);
    }
  },
  actions:{

  },
  getters:{
    getMenuInfo(state){
      return state.menuInfo;
    }
  },
  modules:{

  }
});

export default store;
