<template>
  <div class="footer-content">
    <el-divider content-position="right"></el-divider>
    © 2020
    <i class="el-icon-user-solid"></i><span class="icon-gap">Brilliant Liu</span>
    <el-divider direction="vertical"></el-divider>
    <i class="el-icon-s-flag"></i><span class="icon-gap">在学习中，技术全面化，成品化</span>
  </div>
</template>

<script>
  export default {
    name: "BlogFooter"
  }
</script>

<style scoped>
  .footer-content{
    padding: 30px 0px;
    text-align: center;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 12px;
    color: #999;
  }
  .icon-gap{
    margin-left:3px;
  }
</style>
