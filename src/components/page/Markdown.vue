<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>markdown编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!--<div class="plugins-tips">
                mavonEditor：基于Vue的markdown编辑器。
                访问地址：<a href="https://github.com/hinesboy/mavonEditor" target="_blank">mavonEditor</a>
            </div>-->

          <el-form ref="form" :model="blog"  label-position="left" label-width="80px">
            <el-form-item >
              <el-button class="editor-btn" type="primary" @click="submit('2')">发布</el-button>
              <el-button class="editor-btn" type="primary" @click="submit('3')">保存草稿</el-button>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="blog.title"></el-input>
            </el-form-item>
            <el-form-item label="类型选择">
              <el-select v-model="blog.type"
                         multiple
                         collapse-tags
                         :multiple-limit = limitNum
                         placeholder="请选择" >
                <div v-for="labelItem in labelInfo">
                  <el-option :key="labelItem.labelCode" :label="labelItem.labelName" :value="labelItem.labelCode"></el-option>
                </div>
              </el-select>
            </el-form-item>
              <mavon-editor v-model="blog.draftContent" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
          </el-form>


        </div>
    </div>
</template>

<script>
  import {saveOrPublishOfBolg,uploadFile,queryLabel} from 'network/query/commonReq';
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: 'markdown',
        data: function(){
            return {
              blog:{
                blogId:'',
                draftContent:'',
                publishContent:'',
                title:'',
                type:[],
                isPublish:''
              },
              limitNum:3,
              labelInfo:[],
              configs: {
              }
            }
        },
        components: {
            mavonEditor
        },
      created() {
        this.queryLabel();
      },
      mounted() {
        //queryLabel();
      },
      methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
                var formdata = new FormData();
                formdata.append('uploadFile', $file);
                //服务器上的图片替换
              uploadFile(formdata).then(res=>{
                const url = res[0].path;
                this.$refs.md.$img2Url(pos, url);
              });
            },
            change(value, render){
                // render 为 markdown 解析后的结果
              /*console.log(this.blog.draftContent);
              console.log(this.blog.publishContent);*/
                this.blog.publishContent = render;
            },
            submit(type){

              this.blog.isPublish=type;
              // console.log("博文保存请求参数："+JSON.parse(this.blog));
              saveOrPublishOfBolg(this.blog).then(res=>{
                this.blog.blogId = res;
                console.log("博文IID:"+this.blog.blogId);
                if(this.blog.isPublish == '2'){
                  this.$message.success('发布成功！');
                }else{
                  this.$message.success('保存成功！');
                }

              });

            },
          // 博文分类标签查询
          queryLabel(){
            queryLabel().then(res =>{
              this.labelInfo = res;
            })
          }
        }
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>
