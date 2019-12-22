import { HTTP } from '../utils/http.js'
class HomeModel extends HTTP {
  constructor() {
    super()
  }
  //获取首页所有数据
  getHome(res) {
    var params = {
      url: 'getHome',//接口路径
      method: 'get', //请求方式
      success: res
    }
    this.request(params)
  }

  //城市轮播
  GetByCity(res) {
    var params = {
      url: 'city',//接口路径
      method: 'get', //请求方式
      success: res
    }
    this.request(params)
  }

  //房源列表数据(根据所属城市id获取)
  GetBydetailscityID(cityID, title, sort, num, res) {
    var params = {
      url: 'recomcitylist',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: {
        city_id: cityID,
        title: title,
        sort: sort,
        num: num
      },
      success: res
    }
    this.request(params)
  }

  //详情表(根据ID获取)
  GetBydetailsID(id, res) {
    var params = {

      url: '/getHousingByDetailsid',//接口路径
      method: 'get', //请求方式
      data: {
        id: id
      },
      success: res
    }
    this.request(params)
  }

  //提交入住人信息
  postByidcardList(idCard, res) {
    var params = {
      url: 'idcard/add',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: idCard,
      success: res
    }
    this.request(params)
  }

  //入住人列表
  postByidcardID(user_id, res) {
    var params = {
      url: 'idcard/list',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: user_id,
      success: res
    }
    this.request(params)
  }

  //入住人个人信息（根据id）
  postruzhuByID(id, res) {
    var params = {
      url: 'idcard/personal',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: id,
      success: res
    }
    this.request(params)
  }

  //删除入住人（根据id）
  postdeleteByID(id, res) {
    var params = {
      url: 'idcard/delete',//接口路径
      method: 'post', //请求方式
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

}
export { HomeModel }