<template>
  <transition name="fade">
    <div class="jiazai" v-show="jiazai">
      <img :src="imgJia">
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default{
      data(){
          return{
              imgJia:require('./guodu2.gif'),
          }
      },
      computed:{
        jiazai(){
          return this.$store.state.mengban
        }
      }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  &.fade-enter-active, &.fade-leave-active
    transition: all 0.5s ease
  &.fade-enter, &.fade-leave-active
    opacity: 0
  .jiazai
    position fixed
    width 100%
    height 100%
    background #391037
    img
      display block
      width 100%

</style>
