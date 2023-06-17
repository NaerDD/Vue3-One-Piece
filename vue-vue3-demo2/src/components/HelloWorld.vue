<template>
  <!-- 以前只允许一个根节点 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ KV }}</h1>
  </div>
  <h1>{{ KV }}</h1>
</template>

<script>
import { onMounted,inject } from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    // 比2.0有优势，同一个周期函数可以存在多个，且都会执行
    onMounted(() => {
      console.log('生命周期函数onMounted');
    }),
    onMounted(() => {
      console.log('生命周期函数onMounted2');
    })
    // provide()和inject可以实现嵌套组件之间的数据传递 A中有B B中有C 2.0需要逐级传递 3.0得到增强 可以直接A到C 父传子
    const KV = inject("message");
    return{
      KV
    }
  }
}
</script>