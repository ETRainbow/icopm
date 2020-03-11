<template>

      <div class="blog-content-wrapper">
          <div class="blog-header-wrapper">
            <div class="header-title">
              <span class="header-content-title">{{blogInfo.title}}</span>
            </div>
            <div class="header-content-subTitle">
              <i class="el-icon-date"></i><span class="icon-gap">发布时间：{{blogInfo.publishTime}}</span>
              <span class="subtitle-separator">|</span>
              <i class="el-icon-s-flag"></i><span class="icon-gap">分类：{{blogInfo.type}}</span>
            </div>
            <div class="header-content-subTitle">
              <i class="el-icon-view"></i><span class="icon-gap">阅读量：{{blogInfo.readNum}}</span>
              <span class="subtitle-separator">|</span>
              <i class="el-icon-star-on"></i><span class="icon-gap">收藏量：{{blogInfo.lireNumL}}</span>
              <span class="subtitle-separator">|</span>
              <el-button type="text"><i class="el-icon-thumb"></i><span class="icon-gap">点击收藏</span></el-button>
            </div>
            <el-divider content-position="right">Brilliant丶Liu</el-divider>
          </div>

          <div class="blog-content-warpper">
            <div class="blog-content">
              <span v-html="blogInfo.publishContent"></span>
            </div>
          </div>
        </div>

</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: "BlogContent",
    components: {
    },
    data(){
      return {
        scroll:null,
        blogInfo:{
          title:"Spring Framework 5.2.2 源码的环境搭建",
          type:'#Spring#SpringMvc#源码解读',
          publishTime:'2020/03/07',
          publishContent:'<h2><a id="_0"></a>该大家安利一个好听的歌曲</h2>\n' +
            '<p>《开不了口》 Jay</p>\n' +
            '<blockquote>\n' +
            '<p>没有你在我有多难熬<br />\n' +
            '没有你在我有多难熬多烦恼<br />\n' +
            '没有你烦我有多烦恼<br />\n' +
            '没有你烦我有多烦恼多难熬<br />\n' +
            '穿过云层<br />\n' +
            '我试着努力向你奔跑<br />\n' +
            '爱才送到<br />\n' +
            '你却已在别人怀抱</p>\n' +
            '</blockquote>\n' +
            '<p>《告白气球》 – Jay</p>\n' +
            '<blockquote>\n' +
            '<p>塞纳河畔左岸的咖啡<br />\n' +
            '我手一杯品尝你的美<br />\n' +
            '留下唇印的嘴<br />\n' +
            '花店玫瑰名字写错谁<br />\n' +
            '告白气球风吹到对街<br />\n' +
            '微笑在天上飞<br />\n' +
            '你说你有点难追想让我知难而退<br />\n' +
            '礼物不需挑最贵只要香榭的落叶<br />\n' +
            '喔营造浪漫的约会不害怕搞砸一切<br />\n' +
            '拥有你就拥有全世界<br />\n' +
            '亲爱的爱上你从那天起<br />\n' +
            '甜蜜的很轻易<br />\n' +
            '亲爱的别任性你的眼睛<br />\n' +
            '在说我愿意.</p>\n' +
            '</blockquote>',
          readNum:'666',
          lireNumL:'999',
        },
        //collapse: true,
        methods:{

        }

      }
    },
  }
</script>

<style scoped>
  .blog-content-wrapper{
    padding: 40px 40px;
    background: #fff;
    /*min-height: 1700px;*/
    box-sizing: border-box;
    box-shadow: initial;
    border-radius: initial;
  }
  .blog-header-wrapper{
    padding: 20px 0px;
    text-align: center;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
  }
  .header-content-title{
    font-size: 22px;
    color: #555;
  }
  .header-content-subTitle{
    color: #999;
    font-size: 12px;
    margin-top: 10px;
  }
  .icon-gap{
    margin-left:3px;
  }
  .subtitle-separator{
    margin: 0px 8px;
  }
</style>
