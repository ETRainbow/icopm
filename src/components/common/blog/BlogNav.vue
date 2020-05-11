<template>
  <div class="sidebar">
    <div class="sidebar-inner">

      <div class="sidebar-el-menu">
        <div class="side-nav-title">
          {{authorInfo.authorName}}
        </div>
        <el-menu class="sidebar-el-menu" v-for="menuItem in menu" :default-active="onRoutes">
          <el-menu-item  :index="menuItem.item_code">
            <template slot="title">
              <i :class="menuItem.item_icon"></i>
              <span>{{menuItem.item_name}}</span>
            </template>
          </el-menu-item >
        </el-menu>
      </div>

      <div class="sidebar-user-wrapper">
        <div class="sidebar-user-phone">
          <el-avatar icon="el-icon-user-solid" :size="100" shape="circle">
            <slot>{{author}}}</slot>
          </el-avatar>
        </div>
        <div class="side-sort-date">
          <span>日志：{{sortData.blog_num}}</span>
          <el-divider direction="vertical"></el-divider>
          <span>标签：{{sortData.blot_label_num}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogNav",
    data(){
      return {
        menu:[
          {
            item_icon:'el-icon-s-home',
            item_name:'首页',
            item_code:'B_M_HOME'
          },
          {
            item_icon:'el-icon-s-flag',
            item_name:'标签',
            item_code:'blogLabel'
          },
          {
            item_icon:'el-icon-s-grid',
            item_name:'归档',
            item_code:'B_M_MANAGER'
          },
          {
            item_icon:'el-icon-search',
            item_name:'搜索',
            item_code:'B_M_SEARCH'
          },

        ],
        author:"加载中...",
        sortData:{
          blog_num:"999",
          blot_type_num:"66",
          blot_label_num:"66",
        },
        authorInfo:{
          authorId:"",
          authorName:'Brilliant Liu'
        },
        collapse: false
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/blog','');
      }
    },
  }
</script>

<style scoped>
  /*总部份*/
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 0px;
    bottom:0;
    overflow-y: scroll;
  }

  .sidebar-el-menu:not(.el-menu--collapse){
    width: 250px;
  }


  .content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
  }
  /* 用户头像部分*/
  .sidebar-user-wrapper{
    padding: 20px 10px;
    color: #999;
    text-align: center;
    background-color:white;
  }
  .side-sort-date{
    text-align: center;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 12px;
    padding: 20px 0px;
  }
  .side-sort-date span {
    margin: 0px 7px;
  }

  /** 用户导航部分*/
  .side-nav-wrapper{
    margin-bottom:20px;
    background-color: #F2F6FC;
  }
  .side-nav-title{
    height: 70px;
    background-color: #324157;
    color: white;
    text-align: center;
    line-height:70px;
  }

</style>
