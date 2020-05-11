<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
        <el-breadcrumb-item>图片上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="20">
      <el-col :span="16" class="container">
        <el-divider content-position="center">我的文件列表</el-divider>
        <el-table :data="pageInfo.data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="上传日期" prop="uploadTime"></el-table-column>
          <el-table-column align="right" prop="path">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <!--<el-link  :href ="path" :underline="false" :disabled="fileType.toUpperCase().endsWith()'.png' || fileType!='.jpg'"><el-button size="mini" type="info">查看</el-button></el-link>-->
<!--              <el-link  :href ="path" download="fileName.jpg" :underline="false"><el-button size="mini" type="info">下载</el-button></el-link>-->
<!--              <el-link :href ="fileUrl"><el-button size="mini" type="info" @click="handleDownload(scope.$index, scope.row)">下载</el-button></el-link>-->
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination style="float: right" :page-size="2" :pager-count="11" layout="prev, pager, next" :total="20"></el-pagination>
      </el-col>
      <el-col :span="8">
        <div>
          <div class="container">
            <el-divider content-position="left">拖拽上传</el-divider>
            <el-row :gutter="24">
              <el-upload class="upload-demo" drag
                         action="#"
                         :before-upload="beforeUpload"
                         >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-row>


            <el-divider content-position="left">图片裁剪后上传</el-divider>
            <div class="crop-demo">
              <img :src="cropImg" class="pre-img">
              <div class="crop-demo-btn">选择图片
                <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
              </div>
            </div>

            <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
              <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" style="width:100%;height:300px;"></vue-cropper>
              <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>

          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
    import VueCropper  from 'vue-cropperjs';
    import {uploadFile,uploadFiles} from 'network/query/commonReq';

    export default {
        name: 'upload',
        data: function(){
            return {
              defaultSrc: require('../../assets/img/img.jpg'),
              fileList: [],
              imgSrc: '',
              cropImg: '',
              dialogVisible: false,
              fileUrl:"src\\assets\\img\\login-bg.jpg",
              fileName:"wode.jpg",
              pageInfo:{
                pageNum:'0',
                pageSize:'5',
                total:'0',
                pages:'0',
                userId:'',
                data:[{
                  id:'20200229142918400507',
                  uploadTime: '2016-05-02',
                  name: 'image.png',
                  path:'http://106.54.87.66:10006/blogs/images/20200229160947707694.png',
                  fileType:'.sss'
                },{
                    id:'20200229142918400507',
                    uploadTime: '2016-05-02',
                    name: 'image.png',
                    path:'http://106.54.87.66:10006/blogs/images/20200229160947707694.png',
                    fileType:'.jpg'
                },{
                    id:'20200229142918400507',
                    uploadTime: '2016-05-02',
                    name: 'image.png',
                    path:'http://106.54.87.66:10006/blogs/images/20200229160947707694.png',
                    fileType:'.jpeg'
                }]
              },
              tableData: [
                {
                date: '2016-05-02',
                name: '王小虎石帆胜丰沙发上fessfsfafsefs孙菲菲.txt王小虎石帆胜丰沙发上fessfsfafsefs孙菲菲.txt王小虎石帆胜丰沙发上fessfsfafsefs孙菲菲.txt',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }],
              search: ''
            }
        },
        components: {
            VueCropper
        },
        methods:{
            setImage(e){
                const file = e.target.files[0];
                if (!file.type.includes('image/')) {
                    return;
                }
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.dialogVisible = true;
                    this.imgSrc = event.target.result;
                    this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
                };
                reader.readAsDataURL(file);
            },
            cropImage () {
                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
            cancelCrop(){
                this.dialogVisible = false;
                this.cropImg = this.defaultSrc;
            },
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            },
          handleDownload(){


          },
          queryFileList(){
            pageInfo.userId=sessionStorage.getItem("userId");
            queryFileList(pageInfo).then( (res) =>{
              pageInfo.date=res;
            });
          },
          beforeUpload(files){
            var fileFormData = new FormData();

            // fileFormData.set("uploadFile",files);
            // fileFormData.set("clientType","SMMS");
            fileFormData.set("smfile",files);
            fileFormData.set("format","json");
            uploadFile(fileFormData).then((res) =>{
              this.$message.success("文件上传成功！");
            }).catch(err => {
              this.$message.error("文件上传失败！");
            });
          }
        },
        created(){
            this.cropImg = this.defaultSrc;
        }
    }
</script>

<style scoped>
    .content-title{
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    .pre-img{
        width: 100px;
        height: 100px;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 5px;
    }
    .crop-demo{
        display: flex;
        align-items: flex-end;
    }
    .crop-demo-btn{
        position: relative;
        width: 100px;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        margin-left: 30px;
        background-color: #409eff;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .crop-input{
        position: absolute;
        width: 100px;
        height: 40px;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
    }
</style>
