import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from "./router/index"



//将axios挂载到全局
const app = createApp(App)
app.use(router)
app.mount('#app')

