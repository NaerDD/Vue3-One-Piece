import axios from "axios";
import base from "./base";

const api = {
  //成品详情地址
  getChengpin(){
    return axios.get(base.baseUrl + base.chengpin)
  }
}
export default api;