import { HTTP } from '../utils/http.js'
class CityModel extends HTTP {
  constructor() {
    super()
  }
  //首页轮播图
  GetByimages(res) {
    var params = {
      url: 'banten',//接口路径
      method: 'get', //请求方式
      success: res
    }
    this.request(params)
  }
  //城市轮播
  GetByCity(res) {
    var params = {
      url: 'getCity',//接口路径
      method: 'get', //请求方式
      success: res
    }
    this.request(params)
  }
  //首页展示推荐数据（只展示3条）
  GetByRoecom(res) {
    var params = {
      url: 'recommended',//接口路径
      method: 'get', //请求方式
      success: res
    }
    this.request(params)
  }
  //首页展示推荐数据（展示全部）
  GetByRoecomlist(res) {
    var params = {
      url: 'recommendedlist',//接口路径
      method: 'get', //请求方式
      success: res
    }
    this.request(params)
  }
  //房源列表数据(根据所属城市id获取)
  GetBydetailscityID(temp, res) {
    var params = {
      url: '/getBYList',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: temp,
      success: res
    }
    this.request(params)
  }

  //详情表(根据ID获取)
  GetBydetailsID(homeID, res) {
    var params = {
      url: 'detailsid',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: {
        id: homeID
      },
      success: res
    }
    this.request(params)
  }

  //详情表(根据ID获取)
  getHousingByReview(housing_id, res) {
    var params = {
      url: 'getHousingByReview',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: {
        housing_id
      },
      success: res
    }
    this.request(params)
  }



  //提交联系人
  postByidcardList(idCard, res) {
    var params = {
      url: 'user/postUserByContact',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: idCard,
      success: res
    }
    this.request(params)
  }

  //获取用户常用入驻人
  postByidcardID(user_id, res) {
    console.log(user_id)
    var params = {
      url: 'user/getUserByContact',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: { user_id },
      success: res
    }
    this.request(params)
  }

  //入住人个人信息（根据id）
  postruzhuByID(id, res) {
    var params = {
      url: 'user/getUserByContactfind',//接口路径
      method: 'get', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: { id },
      success: res
    }
    this.request(params)
  }

  //入住人个人信息（根据id）
  PostDataByCollection(data, res) {
    var params = {
      url: 'PostDataByCollection',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data,
      success: res
    }
    this.request(params)
  }

  

  //删除入住人（根据id）
  postdeleteByID(id, res) {
    var params = {
      url: 'user/getUserByContactByDelete',//接口路径
      method: 'post', //请求方式
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      data: {
        id
      },
      success: res
    }
    this.request(params)
  }

}
export { CityModel }