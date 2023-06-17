<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>home</h3>
    <p>counter = {{$store.state.counter}}</p>
    <p>counter = {{$store.getters.getCount}}</p>
    <p>counter = {{counter}}</p>
    <!-- 这里依然是引入...mapGetters来展开后方便多次使用 -->
    <p>{{getCount}}</p>
    <!-- 将mapMutations引入后不能直接调用方法 依然需要在methods中去调用this.addClickHandle -->
    <button @click="addClickHandle">增加</button>
    <!-- 错误的写法 -->
    <!-- <button @click="addCounter()">增加</button> -->

    <button @click="asyncAdd">异步增加</button>
  </div>
</template>

<script>
// 同理还有mapMutations
import { mapState,mapGetters,mapMutations, mapActions } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState(["counter"]),
    ...mapGetters(["getCount"]),
    // 相当于将mapMutations拉过来展开其中的addCounter方法 便于多次使用 从而减少$store.****.的编写
    // ...mapMutations(["addCounter"])
  },
  methods:{
    ...mapMutations(["addCounter"]),
    ...mapActions(["asyncAddCounter"]),
    // 同步增加 
    addClickHandle(){
      // 我认为应该这样写 但是报错了
      // this.$store.mutations.addCounter()

      // 正确的写法------固定调用方式--------提交mutation
      // this.$store.commit("addCounter",20)

      //使用...mapGetters之后的调用方式 直接当做方式去调用
      this.addCounter(15)
    },
    // 异步增加 
    asyncAdd(){
      // 正确的写法------固定调用方式
      // this.$store.dispatch("asyncAddCounter")

      //使用...mapActions之后的调用方式 直接当做方式去调用
      this.asyncAddCounter()
    }
  }
}
</script>
