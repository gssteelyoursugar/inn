import { HTTP } from '../utils/http.js'
class InstModel extends HTTP {
  constructor() {
    super()
  }
  GetCourseList(data, res) {
    var params = {
      url: 'Inst/GetCourseList',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
  
}
export { InstModel }