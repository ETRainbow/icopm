<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">ICOPM后台管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" status-icon class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="手机号">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="validateCode">
          <el-col :span="12">
            <el-input v-model="ruleForm.validateCode" placeholder="验证码"></el-input>
          </el-col>
          <el-col :span="12">
            <a @click="getVerificationCode">
              <el-image :src="verificationImg" style="width: 100px; height: 32px;margin-left: 15px;">
              </el-image>
            </a>
          </el-col>
        </el-form-item>

        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
      <p class="login-tips"><a @click="toRegister">快速注册</a></p>
    </div>
  </div>
</template>

<script>
  import {requestLogin, requestVerificationCode} from 'network/query/commonReq';

  export default {
    mounted() {
      this.getVerificationCode();
    },
    data: function () {
      var checkPhone = (rule, value, callback) => {

        if ('' == value) {
          return callback(new Error('请输入手机号'));
        }
        setTimeout(() => {
          if (value.toString().length != 11) {
            return callback(new Error('请输入11位手机号'));
          }
          /*this.$message.error("手机号：" + value.match('\d{11}'));

          if (!value.match('\d{11}')) {
            return callback(new Error('请输入11位手机号'));
          }*/
          callback();
        }, 1000);
      };
      return {
        verificationImg: "",
        ruleForm: {
          username: '',
          password: '',
          validateCode: '',
          validateType: '1'
        },
        rules: {
          username: [
            {validator: checkPhone, message: '请输入手机号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          validateCode: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ]
        },

      }
    },
    methods: {
      // 提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //const parameters = JSON.stringify(this.ruleForm);
            //console.debug("parameters:"+parameters);

            //登录验证
            requestLogin(this.ruleForm).then((res) =>{

              this.initBaseInfo(res);

              this.$router.push('/');

            });

          } else {
            console.error('账号或密码格式错误！');
            return false;
          }
        });
      },

      //获取图片验证码
      getVerificationCode() {
        requestVerificationCode().then(res => {
          /*if(typeof res == "undefined" || res.status == 'ERROR'){
            this.$message({
              showClose: true,
              message: "[验证码]"+res.message,
              type: 'error'
            });
            return;
          }*/
          /*if(typeof res != "undefined"){

          }*/
          this.verificationImg = 'data:image/jpg;base64,' + res;

        });
      },
      //跳转在注册
      toRegister(){
        this.$router.push('/register');
      },
      initBaseInfo(res){
        //初始化登录用户信息
        //sessionStorage.clear();
        sessionStorage.setItem("userId", res.userId);
        sessionStorage.setItem("menuInfo", JSON.stringify(res.menuInfos));
        //初始化用户可以访问根资源集合
        const menuInfo = res.menuInfos;
        const sources = [];

        for (let i = 0; i <menuInfo.length; i++) {
          const menu = menuInfo[i];
          for(let j = 0 ; j < menu.menuItems.length;j++){
            const items = menu.menuItems[j];
            sources.push(items.modulePath);
          }
        }
        //登录存储信息前，先销毁以前的数据
        this.$store.commit('destoryStateInfo');
        sessionStorage.setItem("sources", JSON.stringify(sources));
      }
    }
  }

</script>

<style scoped>
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    /*background-image: url(../../assets/img/login-bg.jpg);*/
    background-color: #1f2f3d;
    background-size: 100%;
  }

  .ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
  }

  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }

  .ms-content {
    padding: 30px 30px;
  }

  .login-btn {
    text-align: center;
  }

  .login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
  }

  .verficationImg-style {
    margin-left: 15px;
  }

  .login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
  }
</style>
