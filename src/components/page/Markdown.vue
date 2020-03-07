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
              <el-button class="editor-btn" type="primary" @click="submit('0')">保存草稿</el-button>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="blog.title"></el-input>
            </el-form-item>
            <el-form-item label="类型选择">
              <el-select v-model="blog.type" placeholder="请选择">
                <el-option key="bbk" label="步步高" value="bbk"></el-option>
                <el-option key="xtc" label="小天才" value="xtc"></el-option>
                <el-option key="imoo" label="imoo" value="imoo"></el-option>
              </el-select>
            </el-form-item>
              <mavon-editor v-model="blog.draftContent" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
          </el-form>


        </div>
    </div>
</template>

<script>
  import {saveOrPublishOfBolg,uploadFile} from 'network/query/commonReq';
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: 'markdown',
        data: function(){
            return {
              blog:{
                draftContent:'',
                publishContent:'',
                title:'',
                type:'',
                isPublish:''
              },
                configs: {
                }
            }
        },
        components: {
            mavonEditor
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
                this.blog.publishContent = render;
            },
            submit(type){
/*
                console.log(this.blog.draftContent);
              console.log(this.blog.html);*/
              blog.submitType=type;
              saveOrPublishOfBolg(this.blog).then(res=>{
                this.$message.success('提交成功！');
              });

            }
        }
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>
