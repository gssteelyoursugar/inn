import { HTTP } from '../utils/http.js'
class InsModel extends HTTP {
  constructor() {
    super()
  }
  //提交机构
  PostDataByAdd(data, res) {
    var params = {
      url: 'ins/PostDataByAdd',//接口路径
      method: 'post', //请求方式
      success: res,
      data

    }
    this.request(params)
  }



  GetUserInsByData(user_id, res) {
    var params = {
      url: 'ins/GetUserInsByData',//接口路径
      method: 'get', //请求方式
      success: res,
      data:{user_id}
    }
    this.request(params)
  }
  




}
export { InsModel }