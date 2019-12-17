import { HTTP } from '../utils/http.js'
class PhotoModel extends HTTP {
  constructor() {
    super()
  }
  PostUserFaceByPhoto(data, res) {
    var params = {
      url: 'photo/PostUserFaceByPhoto',//接口路径
      method: 'post', //请求方式
      success: res,
      data

    }
    this.request(params)
  }
  GetUserCourseByPhoto(temp, res) {
    var params = {
      url: 'photo/GetUserCourseByPhoto',//接口路径
      method: 'get', //请求方式
      success: res,
      data: temp

    }
    this.request(params)
  }
}
export { PhotoModel }