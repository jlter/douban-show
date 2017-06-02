<template>
  <div class="hello">
    <h1>hello</h1>
    <p>{{message}}</p>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message:'恩。我就是一个欢迎页。现在可以做到的是热播电影。和搜索，根据网络情况可能会卡。但是，并不太影响使用。打个时间戳。2017.05.12 17:36',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
