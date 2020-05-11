
<template>

  <div class="wrapper">
    <!--<v-head></v-head>-->
    <blog-nav></blog-nav>
    <div class="content-box">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogHeader from "./BlogHeader";
  import BlogNav from "./BlogNav";
  import BlogContent from "./BlogContent";
  import BlogFooter from "./BlogFooter";

  export default {
    name: "blogHome",
    data(){
      return {
        isShowHeader:false,
      }

    },
    components: {BlogFooter, BlogNav, BlogHeader,BlogContent},
    methods:{

    }
  }
</script>

<style scoped>

  .content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 0;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
  }
</style>
