<template>
  <div class="hello">
    <!-- 一个数据在一个组件中只使用一次就用这种方法 直接读$store -->
    <p>counter = {{$store.state.counter}}</p>
    <!-- 一个数据在一个组件中需要使用多次就使用...mapstate来将vuex中的数据扩展到当前仓库中 既可以直接使用 -->
    <p>{{counter}}</p>
    <p>{{counter + 1}}</p>
  </div>
</template>

<script>
// vuex提供的state快捷读取方式 搭配计算属性computed来使用
import { mapState } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 专门来读取vuex的数据
  computed:{
    ...mapState(["counter"])
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
