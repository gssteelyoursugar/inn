import { HTTP } from '../utils/http.js'

class CourseModel extends HTTP {
  constructor () {
    super()
  }

  GetCourseList (data, res) {
    let params = {
      url: 'Course/GetCourseList',
      method: 'post',
      success: res,
      data
    }
    this.request(params)
  }

  //获取课程详情
  GetCourseByInfo(temp, res) {
    var params = {
      url: 'Course/GetCourseByInfo',//接口路径
      method: 'get', //请求方式
      success: res,
      data: temp
    }
    this.request(params)
  }
  GetUserByCourse(temp, res) {
    var params = {
      url: 'Course/GetUserByCourse',//接口路径
      method: 'get', //请求方式
      success: res,
      data: temp
    }
    this.request(params)
  }

  GetUserCourseByInfo(temp, res) {
    var params = {
      url: 'Course/GetUserCourseByInfo',//接口路径
      method: 'get', //请求方式
      success: res,
      data: temp
    }
    this.request(params)
  }

  GetUserCourseByLog(data, res) {
    var params = {
      url: 'Course/GetUserCourseByLog',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }


  GetUserCourseLogByInfo(data, res) {
    var params = {
      url: 'Course/GetUserCourseLogByInfo',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
  /**
   * 结束课程
   */
  PostUserCourseByOver(data, res) {
    var params = {
      url: 'Course/PostUserCourseByOver',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
};


export { CourseModel }