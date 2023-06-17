import axios from "axios";
import querystring from "querystring"

const errorHandle = (status,info) =>{
  switch(status){
    case 400:
      console.log('语义有误');
      break;
    case 401:
      console.log('服务器认证失败');
      break;
    case 403:
      console.log('服务器拒绝访问');
      break;
    case 404:
      console.log('地址错误');
      break;
    case 500:
      console.log('服务器遇到意外');
      break;
    case 502:
      console.log('服务器无响应');
      break;
default:
  console.log(info);
  break;
  }
}

//设置超时时间
const instance = axios.create({
  //网络请求的公共配置
  timeout:5000
})

//拦截器最常用的
//发送数据之前
instance.interceptors.request.use(
  config =>{
    if(config.methods === "post"){
      config.data = qs.stringify(config.data)
    }
    //config：包含着网络请求的所有信息
    return config;
  },
  error =>{
    return Promise.reject(error)
  }
)
//获取数据之前
instance.interceptors.response.use(
  response =>{
    //网络的请求是成功的 都可能走这条
    return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
  },
  //网络的请求是失败的 走这里
  error =>{
    const { response } = error;
    //错误的处理才是最需要关注的
    errorHandle(response.status,response.info)
  }
)

//往外暴露
export default instance;
