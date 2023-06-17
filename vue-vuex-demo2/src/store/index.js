import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  // 初始状态数据
  state: {
    counter:10
  },
  // 对state中拿到的数据进行过滤 符合条件就读取出来 不符合条件就不展示
  getters: {
    getCount(state){
      return state.counter > 0 ? state.counter :"counter数据异常"
    }
  },
  // 方法 更改Vuex的store中的状态的唯一方法就是提交
  mutations: {
    addCounter(state,num){
      state.counter+=num
    }
  },
  // action 提交的是mutation，而不是直接改变状态 多用于异步操作
  actions: {
    asyncAddCounter({commit}){
      axios.get("http://iwenwiki.com/api/generator/list.php")
      .then(res=>{
        // 以下是使用方式
        commit("addCounter",res.data[0]) 
      })
    }
  },
  modules: {
  }
})
