<template>
  <div class="searchs">
    <div class="page">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input4">
          <template slot="append"><el-button><i @click="start" class="el-icon-search"></i></el-button></template>
        </el-input>
        <hr>

        <ul class="listShow" v-show="getData">
          <li v-for="items in searchList">
           <div class="img"> <img :src="items.images.large" alt=""></div>
            <div class="list">
              <span>{{items.title}}</span>
            </div>
            <el-button class="toSee">查看详情</el-button>
          </li>
        </ul>
        <masks v-show="mengban"></masks>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import masks from '../content/mask.vue'
  export default{
    data(){
      return{
        input4:'',
        searchList:[],
        getData:false,
        mengban:false
      }
    },
    methods:{
      start(){
          //点击之后蒙版出现
          this.mengban = true
          this.searchList = []
          this.$http.jsonp('http://api.douban.com/v2/movie/search?q='+this.input4).then((res)=>{
              this.getData = true
              this.mengban = !this.getData
              this.searchList = res.data.subjects
            console.log( this.searchList)
          })
      }
    },
    components:{
      masks
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchs
    position fixed
    z-index:100;
    width 100%
    height 100%
    background: #fff
    .page
      position: relative;
      width 100%
      height 100%
      overflow-y auto
      padding-bottom 50px
      .listShow
        li
          width 100%
          position: relative;
          padding:10px 0
          height 8em
          border-bottom 1px solid #333
          overflow: hidden
          .img
            width 30%
            text-align center
            float: left
            img
              display inline-block
              max-width 8em
              max-height 8em
              min-width 5em
              min-height 5em
          .list
            display inline-block

            width 70%
            span
              width 100%
              float: left
              font-size 24px
              text-align center

          .toSee
            position: absolute
            bottom 10px
            right 10px

</style>
