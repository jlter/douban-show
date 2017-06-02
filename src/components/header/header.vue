<template>
  <div class="header">
    <nav>
      <span class="tip"><i class="el-icon-menu logo"></i>{{tip}}</span>
      <span class="search"><i class="el-icon-search" @click="showSearch"></i></span>
      <search v-show="showKey"></search>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import search from '../search/search'
  export default{
      data(){
          return{
            tip:'电影',
            showKey:false
          }
      },
      methods:{
        showSearch(){
            this.showKey = !this.showKey
        }
      },
      components:{
          search
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100%
    min-height 50px
    background: #333
    .tip
      display inline-block
      vertical-align top
      padding 10px 20px
      line-height 40px
      color #fff
      font-size 18px
      .logo
        padding-right 10px
    .search
      float right
      color #fff
      padding 20px
      font-size 20px
      line-height 22px

</style>
