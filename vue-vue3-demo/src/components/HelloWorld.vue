<template>
  <div class="hello">
    <p>{{ message }}</p>
    <ul>
      <li v-for="(item,index) in names.list" :key="index">{{ item }}</li> 
    </ul>
    <button @click="clickHandle">按钮</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { ref,reactive } from 'vue';
export default {
  name: 'HelloWorld',
  // 使用props父传子数据需要先定义props中需要使用到的数据的类型
  props:{
    msg:String
  },
  // 组合式API
  setup(props,ctx){
    // setup中没有this 如果需要使用this就只能通过 context
    // console.log(this); undefined
    console.log(ctx);
    console.log(props.msg);

    //ref  基本类型数据 使用率较高
    const message =  ref("我是消息2")

    //reactive  复杂类型数据 使用率较高
    const names = reactive({
      list:["iwen","ime","frank"]
    })

    // 如果需要使用到父类通过props中传递来的数据进行展示
    const msg = props.msg


    // 函数不再写在methods里面 直接写function
    function clickHandle(){
      // 通过message的value去修改数据
      message.value = "我是新的消息"
      console.log('点击了');
      
    }
    // 都要加一个return 外部需要访问 都要将声明的[对象 函数]暴露出去
    return {
      message,
      names,
      clickHandle
    }
  }
}
</script>