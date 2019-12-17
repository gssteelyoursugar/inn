import { HTTP } from '../utils/http.js'
class UserModel extends HTTP {
  constructor() {
    super()
  }
  //获取用户信息
  GetCheckOpenid(data, res) {
    var params = {
      url: 'user/GetCheckOpenid',//接口路径
      method: 'post', //请求方式
      success: res,
      data

    }
    this.request(params)
  }

//获取用户手机号码
  getPhone(data, res) {
    var params = {
      url: 'user/getPhone',//接口路径
      method: 'post', //请求方式
      success: res,
      data

    }
    this.request(params)
  }

  //获取用户信息
  GetUserByInfo(user_id, res) {
    var params = {
      url: 'user/GetUserByInfo',//接口路径
      method: 'post', //请求方式
      success: res,
      data: { user_id}

    }
    this.request(params)
  }

  

  //提交订单
  userPay(data, res) {
    var params = {
      url: 'user/userPay',//接口路径
      method: 'post', //请求方式
      success: res,
      data

    }
    this.request(params)
  }

  //获取关于用户的信息
  GetUserByDataInfo(user_id, res) {
    var params = {
      url: 'user/GetUserByDataInfo',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { user_id}

    }
    this.request(params)
  }


  //获取关于用户的信息统计
  GetUserByStati(user_id, res) {
    var params = {
      url: 'user/GetUserByStati',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { user_id }

    }
    this.request(params)
  }
  PostReal(data, res) {
    var params = {
      url: 'user/PostReal',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  getUserIntgral(user_id, res) {
    var params = {
      url: 'user/getUserIntgral',//接口路径
      method: 'get', //请求方式
      success: res,
      data:{user_id}
    }
    this.request(params)
  }

  
  

  
}
export { UserModel }