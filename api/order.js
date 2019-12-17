import { HTTP } from '../utils/http.js'
class OrderModel extends HTTP {
  constructor() {
    super()
  }
  //提交订单
  PostDataBySave(data, res) {
    var params = {
      url: 'Order/PostDataBySave',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
  //提交订单
  PostDataByEva(data, res) {
    var params = {
      url: 'Order/PostDataByEva',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
}
export { OrderModel }