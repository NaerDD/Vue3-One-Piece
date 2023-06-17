<template>
  <div class="hello">
    <h3>学习Vue3:模板语法</h3>
    <p>{{msg}}</p>
    <!-- innerText -->
    <div>{{rawText}}</div>
    <!-- innerHTML -->
    <div v-html="rawHtml"></div>
    <!-- v-bind -->
    <div :id="dynamicId"></div>
    <p v-if="flag">我是孙猴子</p>
    <p v-else>你是傻猴子</p>
    <!-- 
      v-show和v-if的区别
      v-if是真正的条件渲染，因为它会确保在切换过程中，如果是true 直接加进dom树，如果是false 不加入dom树
      v-show是只调整标签的style属性中的display属性为block/none v-show不管初始条件是什么，元素总是会被渲染，并且只是简单的基于css进行切换
      总结 v-if有更高的切换开销，而v-show有更高的初始渲染开下，因此如果需要非常频繁的切换;则使用v-show比较好，如果在运行时很少改变用v-if
     -->
    <p v-show="flag">你真的是那只孙猴子么</p>
     <ul>
      <li v-for="item in newsList" :key="item.id">{{item.title}}</li>
      <!-- 第二种写法 item当中没有携带ID属性 自己创建index索引(一般不使用，后台传数据一般都有) -->
      <!-- <li v-for="(item,index) in newsList" :key="index">{{item.title}}</li> -->
     </ul>
     <button @click="counter += 1">点击加1 counter={{counter}}</button>
     <button @click="clickHandle">按钮</button>
     <p>{{ message }}</p>
     <div class="hello">
      <swiper class="mySwiper" :modules="modules" :pagination="{clickable:true}">
        <swiper-slide>
          <img src="../assets/1.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/2.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/3.jpg">
        </swiper-slide>
      </swiper>
     </div>
     <p>{{ chengpin.title }}</p>
     <h3>解决跨域问题proxy</h3>
  </div>
    
</template>

<script>

import { Pagination } from 'swiper';
import {Swiper,SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
//局部引入
// import axios from "axios";
import querystring from "querystring";
import api from "../api/index"
import axios from 'axios';


export default {
  
  name: 'HelloWorld',
  components:{
    Swiper,
    SwiperSlide,
    Pagination,
  },
  data(){
    return{
      modules:[ Pagination ],
      msg:"学习Vue",
      // innerHTML innerText 的区别
      rawText:"<a href='http://www.vue3.com'>ppt</a>",
      rawHtml:"<a href='http://www.vue3.com'>ppt</a>",
      dynamicId:10001,
      flag:true,
      newsList:[
        {
          id:1001,
          title:"今日头条1"
        },
        {
          id:1002,
          title:"今日头条2"
        },
        {
          id:1003,
          title:"今日头条3"
        },
      ],
      counter:1,
      message:"消息通知",
      chengpin:{}
    }
  },
  mounted(){
    //get请求方式
    // axios({
    //   method:"get",
    //   url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
    // }).then(res=>{
    //   this.chengpin = res.data.chengpinDetails[0]
    // })

    //post请求方式
    //需要额外处理
    // 安装依赖 npm install --save querystring
    // 转换格式 qs.stringify({})
    //   axios({
    //     method:"post",
    //     url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
    //     data:querystring.stringify({
    //       user_id:'iwen@qq.com',
    //       password:"iwen123",
    //       verification_code:"crfvw"
    //   })
    // }).then(res=>{
    //     console.log(res.data);
    //     this.chengpin = res.data.chengpinDetails[0]
    //   })

    //快捷方式
    // this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
    // .then(res=>{
    //   console.log(res.data);
    //   this.chengpin = res.data.chengpinDetails[0]
    // }),

    // this.$axios.post("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",querystring.stringify({
    //   user_id:'iwen@qq.com',
    //       password:"iwen123",
    //       verification_code:"crfvw"
    // }))
    // .then(res=>{
    //   console.log(res.data);
    //   this.chengpin = res.data.chengpinDetails[0]
    // })

    api.getChengpin().then(res =>{
      console.log(res.data);
    })

    axios.get("api/FingerUnion/list.php").then(res=>{
      console.log(res.data);
      
    })
  },
  methods:{
    //如果点击事件中触发的逻辑代码复杂则用到
    clickHandle(event){
      console.log('哈哈');
      //在事件中，读取data中的属性，是需要通过this.属性来读取
      this.counter += 1;
      //这里event是原生DOM event
      console.log(event);
      event.target.innerHTML = "点击之后"
      this.message = "新通知来了";
    }
  }
}
</script>

<style scoped>
.hello{
  width: 100%;
  display: block;
}
</style>
