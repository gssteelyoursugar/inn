import { HTTP } from '../utils/http.js'
class PlatModel extends HTTP {
  constructor() {
    super()
  }
  //提交机构
  plat( res) {
    var params = {
      url: 'Plat/plat',//接口路径
      method: 'get', //请求方式
      success: res,

    }
    this.request(params)
  }



  GetUserInsByData(user_id, res) {
    var params = {
      url: 'ins/GetUserInsByData',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { user_id }
    }
    this.request(params)
  }





}
export { PlatModel }