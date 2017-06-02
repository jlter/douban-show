<template>
  <div class="tab">

      <nav>
        {{label[0].title}}
        <i class="el-icon-close closeThis" @click="closeThis"></i>
      </nav>
    <div class="page">
      <header>
        <img :src="label[0].images.large" alt="" class="itemHead">
        <ul class="testLabel">
          <li>主演:{{label[0].casts[0].name}}</li>
          <li>导演:{{label[0].directors[0].name}}</li>
          <li>上映日期:{{label[0].year}}</li>
          <li>类型分类:</li>
          <el-tag
            :key="tag.name"
            v-for="tag in this.label[0].genres"
          >
            {{tag}}
          </el-tag>
          <li>
            <el-rate
            v-model="this.label[0].rating.average"
            disabled
            :max="10"
            show-text
            text-color="#ff9900"
            text-template="{value}">
          </el-rate>
          </li>
        </ul>
      </header>
      <div class="summary" v-if="label[0].summary">{{label[0].summary}}</div>
      <div class="else" v-else>简介貌似被屏蔽了,我也没办法啊。我也很绝望啊。接口被屏蔽了我没辙</div>


      <!--导演-->

      <div class="directors">
        <p class="title"><i class="el-icon-menu"></i>导演简介:</p>
        <div class="container">
          <img :src="label[0].directors[0].avatars.large" alt="">
          <ul class="content">
            <li>{{label[0].directors[0].name}}</li>
          </ul>
        </div>
      </div>

      <!--主演-->
      <div class="major">
        <p class="title"><i class="el-icon-menu"></i>主演简介:</p>
        <div class="container">
         <dl class="majorList" v-for="item in label[0].casts">
           <dt><img :src="item.avatars.large" alt="" class="headShow"></dt>
           <dd>{{item.name}}</dd>
         </dl>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
      props:{
        label:{
              type:String,
              default: []
          }
      },
      methods:{
        closeThis:function(){
            this.$emit('showTables',false)
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tab
    position: fixed
    width 100%
    height 100%
    background: #000
    top:0
    left:0
    nav
      position: relative
      height 50px
      width 100%
      background: #fff
      text-align: center
      line-height 50px;


      .closeThis
        color #333
        position: absolute
        right 10px
        top: 10px
    .page

      width 100%
      overflow-x hidden
      overflow-y auto
      height 100%

      header
        overflow: hidden
        .itemHead
          width 50%
          float left

        .testLabel
          padding-top 50px
          width 50%
          display inline-block
          li
            color white
            padding 10px 20px
            font-size 14px
          &>span
            margin 10px 5px
            &:first-of-type
              margin-left 20px

      .summary
        color white
      .else
        padding: 10px 0
        font-size 16px
        line-height 40px
        color white

      .directors
        overflow: hidden
        .title
          padding: 10px 0
          background: #eee
        .container
          img
            float right
            width 50%
          .content
            line-height 50px
            width:50%
            color white
            text-align center



      .major
        width 100%
        padding-bottom 100px
        .title
          padding: 10px 0
          background: #eee
        .container
          display flex
          .majorList
            flex 1
            dt
              .headShow
                width 100%
            dd
              color white
              text-align center
              font-size 14px
              line-height 30px

</style>
