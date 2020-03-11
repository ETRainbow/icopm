
<template>
  <div class="blog—wrapper">

    <el-row :gutter="20">

      <el-col :span="5">
        <div class="blog-left-wrapper">
          <blog-nav></blog-nav>
        </div>
      </el-col>

      <el-col :span="19" class="sss">
        <div class="content-box">
          <div class="content">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--<el-row :gutter="20">

      <el-col :span="5">
        <div class="blog-left-wrapper">
          <blog-nav></blog-nav>
        </div>
      </el-col>

      <el-col :span="19" class="sss">
        <div class="blog-header-wrapper">
          <blog-header v-show="isShowHeader"></blog-header>
        </div>
        <template class="blog-content-wrapper">
          <blog-content></blog-content>
        </template>
        <div class="blog-foot-wrapper">
          <blog-footer></blog-footer>
        </div>
      </el-col>
    </el-row>-->

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
  .blog—wrapper{
    /*top:0px;*/
    background-color: #f4f4f5;
    overflow-y: scroll;
    width: auto;
    height: 100%;
    box-sizing: border-box;
    padding:0px 88px;
    margin: 0px 0px;
  }
  .blog-left-wrapper{
   /* width: 240px;
    float:left;*/
  }
  .blog-foot-wrapper{
    background-color: #f4f4f5;

  }
  /*.sss {
    padding: 0;
    margin: 0;
  }*/
  .blog-content-wrapper{
    /*position: relative;
    float:left;*/
  }
</style>
