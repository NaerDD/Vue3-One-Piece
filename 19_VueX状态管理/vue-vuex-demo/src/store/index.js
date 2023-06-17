import { createStore } from "vuex";
// VueX的核心作用就是帮我们管理组件之间的状态
export default createStore({
  // 所有的状态放这里
  state:{
    counter:0
  }
})

