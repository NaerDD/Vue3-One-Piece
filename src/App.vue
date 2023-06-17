<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MyComponent :title="title" :age="age" :names="names" @onEvent="getDataHandle"/>
  <p>{{ message }}</p>
  <!-- 两种写法 多单词时用-连接 -->
  <!-- <my-component /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,MyComponent
  },
  data(){
    return{
      title:"我是父组件通过props传递来的数据",
      age:20,
      names:["iwen","ime","tony"],
      message:""
    }
  },
  methods:{
    getDataHandle(data){
      console.log(data);
      this.message = data;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
