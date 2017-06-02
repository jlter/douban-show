<template>
  <div class="content">
    <p class="title">
      <router-link to="/hot">热播电影</router-link>
      <router-link to="/">返回主页</router-link>
    </p>
    <keep-alive>
     <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    .title
      display block
      background #333
      height 50px
      margin 0!important
      a
        width 50%
        float left
        text-decoration none
        color #fff
        line-height 50px
        text-align center
        font-size 14px







</style>
