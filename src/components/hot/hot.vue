<template>
  <div class="hot">

      <masks></masks>

    <ul>
     <li v-for="item in dataList" @click="showTable(item)">
         <img class="showImg" :src="item.images.large" alt="">
         <p class="showName">{{item.title}}</p>
     </li>
    </ul>
    <transition name="fade">
      <v-table v-show="showTables" @showTables="tableSay" :label=this.label></v-table>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import table from '../table/table'
  import masks from '../content/mask.vue'
  export default{
    data(){
        return{
            dataList:[],
            showTables:false,
            search:false,
            label:'',
            mengban:false,
            totalApi:''
        }
    },
    created:function(){
      this.totalApi = this.$store.state.totalApi

      this.$http.jsonp(
          'http://api.douban.com/v2/movie/in_theaters'
//      ""+this.totalApi+'/movie/in_theaters'
      ).then((res)=>{

          this.dataList = res.data.subjects
          this.$store.commit('show',this.mengban)
      },(error)=>{
        console.log(error)
      })
    },
    methods:{
      showTable(item){
        this.showTables = !this.showTables
        this.label = []
        this.label.push(item)
        this.$http.jsonp('http://api.douban.com/v2/movie/subject/'+item.id).then((res)=>{

        })


      },
      tableSay(abc){
       this.showTables = abc
      }
    },
    components:{
        'v-table':table,
         masks

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  &.fade-enter-active, &.fade-leave-active
    transition: all 0.5s ease
  &.fade-enter, &.fade-leave-active
    opacity: 0
  .hot
    width 100%
    background #eeeeee
    overflow: hidden
    li
      width 30%
      box-shadow 2px 2px 2px #ccc
      margin:0 1.5%
      background #ffffff
      display inline-block
      vertical-align middle
      a
        text-decoration none
        color #111
        text-align center
      .showImg
        display inline-block
        width 100%
      .showName
        text-align center
        font-size 0.6em
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        line-height 40px
</style>
