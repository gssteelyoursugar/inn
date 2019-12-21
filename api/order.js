import { HTTP } from '../utils/http.js'
class OrderModel extends HTTP {
  constructor() {
    super()
  }
  //提交订单表
  postOrder(data, res) {
    var params = {
      url: 'order/postDataByAdd',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: data,
      success: res
    }
    this.request(params)
  }

  //查看订单详情（根据订单返回ID）
  postOrderpay(id, res) {
    var params = {
      url: 'order/getOrderByFind',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: {
        id: id
      },
      success: res
    }
    this.request(params)
  }

  //查看订单详情（根据订单返回ID）
  postOrderall(temp, res) {
    var params = {
      url: 'order/getOrderByall',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: temp,
      success: res
    }
    this.request(params)
  }

  //查看订单详情（根据订单返回ID）
  getIDByDT(id, res) {
    var params = {
      url: 'order/getIDByDT',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: {
        id: id
      },
      success: res
    }
    this.request(params)
  }

  //查看订单详情（根据订单返回ID）
  GetVideoByList(electrical_id, res) {
    var params = {
      url: 'order/GetVideoByList',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: {
        electrical_id
      },
      success: res
    }
    this.request(params)
  }


  //提交评价
  postOrderByreview(data, res) {
    var params = {
      url: 'order/postOrderByreview',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: data,
      success: res
    }
    this.request(params)
  }
}


export { OrderModel }