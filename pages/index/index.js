// pages/index/index.js

import { HomeModel } from '../../api/home.js';
let homemodel = new HomeModel();

import {
  CityModel
} from '../../api/city.js';
let list = new CityModel();

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    is_realname:false,//是否实名注册
    homeruzhuTime: '',//入住时间
    homelikaiTime: '',//离店时间
    nameCity:'北海',
    wan: 0,// 默认0晚
    str: '', //用来判断页面数据
    // dataTime: false, //时间弹出框
    background: [
      {
        id:1,
        img_Url:'https://z1.muscache.cn/im/pictures/38d92da5-8971-432a-83c6-43964e608fa4.jpg?aki_policy=xx_large'
      },
      {
        id:2,
        img_Url:'https://z1.muscache.cn/im/pictures/47a08be7-d55d-4017-aeb4-a6f60cbac664.jpg?aki_policy=xx_large'
      }
      ],
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    housing:[
    
    ],
    userInfo:{},
    vertical2: false,
    interval2: 2000,
    duration2: 500,
    nextMargin2: '100rpx',
    evaluateList:[
      {
        imgUrl:'http://k.zol-img.com.cn/dcbbs/24715/a24714279_01000.jpg',
        desc:'【小院有露台，可以看看星星，门前有泉水，很甜的哦】',
        headUrl:'../../../static/img/avatar.jpg',
        name:'途途梦想家',
        browse:1000
      },
      {
        imgUrl: 'http://hbimg.b0.upaiyun.com/264af979a0a6192883a463d85b0373a628aec0d338358-NtFaOZ_fw658',
        desc: '【小院有露台，可以看看星星，门前有泉水，很甜的哦】',
        headUrl: '../../../static/img/avatar.jpg',
        name: '李大宝',
        browse: 130
      },
      {
        imgUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1509/30/c2/13354908_1443558561264_320x480.jpg',
        desc: '【小院有露台，可以看看星星，门前有泉水，很甜的哦】',
        headUrl: '../../../static/img/avatar.jpg',
        name: '张无忌家',
        browse: 394
      }, {
        imgUrl: 'http://pic1.win4000.com/wallpaper/2017-12-13/5a3095f874824.jpg',
        desc: '【小院有露台，可以看看星星，门前有泉水，很甜的哦】',
        headUrl: '../../../static/img/avatar.jpg',
        name: 'Angell',
        browse: 569
      },
      {
        imgUrl: 'http://pic1.win4000.com/wallpaper/2018-01-03/5a4c4270d8799.jpg',
        desc: '【小院有露台，可以看看星星，门前有泉水，很甜的哦】',
        headUrl: '../../../static/img/avatar.jpg',
        name: '香梨',
        browse: 2666
      },
      {
        imgUrl: 'http://pic1.win4000.com/mobile/0/53b511fca2128_200_300.jpg',
        desc: '【小院有露台，可以看看星星，门前有泉水，很甜的哦】',
        headUrl: '../../../static/img/avatar.jpg',
        name: '香梨',
        browse: 395
      },
      {
        imgUrl: 'http://pic1.win4000.com/wallpaper/e/5603566d66a7c.jpg',
        desc: '【小院有露台，可以看看星星，门前有泉水，很甜的哦】',
        headUrl: '../../../static/img/avatar.jpg',
        name: '香梨',
        browse: 683
      }
    ]
  },
  //跳转房源详情
  clickToDetail(e) {
    let { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/detail/index?details_id=' + id,
    })
  },
  
  showData() {
    wx.navigateTo({
      url: "/pages/component/datatime/index"
    })
  },
  //选择城市
  toggleCity() {
    wx.navigateTo({
      url: "/pages/city/index"
    })
  },
  //跳转热门搜索
  hotSearch: function() {
    wx.navigateTo({
      url:'/pages/hotsearch/index'
    })
  },
  //收藏房源成功
  btnSucceed: function (e) {
    let { show_id,index } = e.currentTarget.dataset

    var temp = {
      user_id: this.data.userInfo.id,
      housing_id: show_id
    }
    list.PostDataByCollection(temp, res => {
    })
    //data中获取列表
    let housing = this.data.housing
    for (let i in housing){
      //遍历列表数据      
      if (i == index) {
        //根据下标找到目标,改变状态  
        if (housing[i].count_coll === 0) {
          housing[i].count_coll = parseInt(housing[i].count_coll) + 1
        }
      }
    }
    //数组重新赋值
    this.setData({
      housing
    })
    wx.showToast({
      title: '收藏成功',
      icon: 'none',
      duration: 2000
    })
  },
  //收藏房源成功
  btnCancel: function (e) {
    let { show_id, index } = e.currentTarget.dataset

    var temp = {
      user_id: this.data.userInfo.id,
      housing_id: show_id
    }
    list.PostDataByCollection(temp, res => {
    })
    //data中获取列表
    let housing = this.data.housing
    for (let i in housing) {
      //遍历列表数据      
      if (i == index) {
        //根据下标找到目标,改变状态  
        if (housing[i].count_coll === 1) {
          housing[i].count_coll = parseInt(housing[i].count_coll) - 1
        }
      }
    }
    console.log(housing);
    //数组重新赋值
    this.setData({
      housing
    })
    wx.showToast({
      title: '收藏取消',
      icon: 'none',
      duration: 2000
    })
  },
  //查看更多房源
  toggleHotmore: function () {
    wx.navigateTo({
      url: '/pages/hotmore/index'
    })
  },
  //点击查看房源
  toggleDetails(e) {
    let details_id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/index'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var userInfo=wx.getStorageSync('userInfo')
    if (userInfo.realname===null){
      this.setData({
        is_realname:false
      })
    }else{
      this.setData({
        is_realname: true
      })
    }


    let that = this;
    var temp={
      user_id: userInfo.id
    }
      homemodel.getHome(temp,res=>{
      that.setData({
        housing:res.home,
        userInfo,
      })
    })
    let homeruzhuTime = wx.getStorageSync('homeruzhuTime')
    let homelikaiTime = wx.getStorageSync('homelikaiTime')
    let wan = wx.getStorageSync('wan')
    if (homeruzhuTime !== that.str || homelikaiTime !== that.str ) {
      that.setData({
        homeruzhuTime,
        homelikaiTime,
        wan
      });
    }
    let nameCity = wx.getStorageSync('nameCity')
    console.log(nameCity,"城市");
    if (nameCity !== '') {
      that.setData({
        nameCity
      })
    }else{
      that.setData({
        nameCity:'北海'
      })
    }
  },

  ToOrder(){
    if(this.data.is_realname===false){
      wx.navigateTo({
        url: '/pages/login/index',
      })
    }else{
      console.log('333')
      wx.switchTab({
        url: '/pages/order/index',
      })

    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})