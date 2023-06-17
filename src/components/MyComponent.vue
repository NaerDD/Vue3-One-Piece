<template>
  <h3>我是单文件组件</h3>
  <p>{{ title }}</p>
  <p>age={{ age }}</p>
  <ul>
    <li v-for="(item,index) in names" :key="index">{{item}}</li>
  </ul>
  <h3>自定义事件传递数据</h3>
  <button @click="sendClickHandle">点击传递</button>
  <p>{{message}}</p>
  <button @click="message='数据'">点击</button>
</template>

<script>
export default {
  // 加载组件的三步走
  // 第一步 引入组件 import MyComponent from './component/MyComponent.vue'
  // 第二步 挂载组件 components:{MyComponent}
  // 第三步 显示组件 <MyComponent/>
  name:"MyComponent",
  //props只能用户父传子
  props:{
    title:{
      type:String,
      default:""
    },
    age:{
      type:Number,
      default:0
    },
    names:{
      type:Array,
      // 数组和对象必须使用函数进行返回
      default:function(){
        return []
      }
    }
  },
  data(){
    return{
      message:"我是Mycomponent数据"
    }
  },
  beforeCreate(){
    console.log('beforeCreate:组件创建之前');
  },  
  created(){
    console.log('beforeCreate:组件创建之后');
  }, 
  beforeMount(){
    console.log('beforeMount:渲染之前');
  },
  mounted(){
    console.log('beforeMount:渲染之后');
    //把网络请求放到这里
  },
  //组件数据发生变化之前 
  updated(){
    console.log('update：组件更新之后');
  },
  beforeUpdate(){
    console.log('update：组件更新之前');
  },
  beforeUnmount(){
    console.log('组件销毁之前');
    //卸载之前，把消耗性能的处理都干掉
    //定时器
  },
  Unmount(){
    console.log('组件销毁之后');
  },
  methods:{
    sendClickHandle(){
      //参数1：字符串:理论上是随便的，但是需要具有意义
      //参数2：传递的数据 
      this.$emit("onEvent",this.message)
    }
  }
}
</script>
<!-- scoped:如果在style中添加此属性，当前样式只在当前组件中生效  -->
<style scoped>
h3{
  color: red;
}
</style>