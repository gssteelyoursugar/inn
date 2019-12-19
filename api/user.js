import { HTTP } from '../utils/http.js'
class UserModel extends HTTP {
  constructor() {
    super()
  }
  //注册用户
  postRegistered(data, res) {
    var params = {
      url: 'user/postUserByRegistered',//接口路径
      method: 'post', //请求方式
      data: data,
      success: res
    }
    this.request(params)
  }

  postBind(data, res) {
    var params = {
      url: 'user/postBind',//接口路径
      method: 'post', //请求方式
      data: data,
      success: res
    }
    this.request(params)
  }

  /**
   * 实名信息提交
   */
  PostRealname(data, res) {
    var params = {
      url: 'user/PostRealname',//接口路径
      method: 'post', //请求方式
      data: data,
      success: res
    }
    this.request(params)
  }


  //房源列表数据(根据所属城市id获取)
  GetUserByOenid(temp, res) {
    var params = {
      url: '/GetUserByOenid',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: temp,
      success: res
    }
    this.request(params)
  }

}
export { UserModel }