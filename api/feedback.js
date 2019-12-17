import { HTTP } from '../utils/http.js'
class FeedbackModel extends HTTP {
  constructor() {
    super()
  }
  //提交意见反馈
  PostDataByBack(data, res) {
    var params = {
      url: 'Feedback/PostDataByfee',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  //获取反馈记录
  GetBackByList(data, res) {
    var params = {
      url: 'Feedback/GetBackByList',//接口路径
      method: 'get', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
}
export { FeedbackModel }