<template>
  <div class="blog-label-wrapper">
    <template v-for="item in labelList">
      <span :id="item.labelCode">{{item.labelName}}</span>
    </template>
  </div>
</template>

<script>
  export default {
    name: "BlogLabel",
    data(){
      return{
        labelList:[
          {
            labelName:"Spring",
            labelCode:"SPRING"
          },
          {
            labelName:"JAVA",
            labelCode:"java"
          },
          {
            labelName:"限流",
            labelCode:"LABEL_XL"
          },
          {
            labelName:"SpringMVC",
            labelCode:"SpringMVC"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
