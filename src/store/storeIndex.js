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
    menuInfo:''
  },
  mutations:{
    initUserInfo(state,jsonDate){
      state.userId=jsonDate.userId;
      state.roleInfoList=JSON.stringify(jsonDate.roleInfoList);
      state.userInfo=JSON.stringify(jsonDate.userInfo);
      state.menuInfo=JSON.stringify(jsonDate.menuInfos);
    },
    destoryUserInfo(state){
      state.userId='';
      state.roleInfoList='';
      state.userInfo='';
      state.menuInfo='';
    }
  },
  actions:{

  },
  getters:{

  },
  modules:{

  }
});

export default store;
