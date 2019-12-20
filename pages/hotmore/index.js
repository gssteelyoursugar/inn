// pages/hotmore/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str:'',
    homeruzhuTime: '',//展示入住时间     格式  12月21
    homelikaiTime: '',//展示离店时间
    dataLikai:'', //存入数据库的入住时间   格式 2019-12-21
    dataLikai:'',//存入数据库的离开时间
    stor:1,//排序
    show: false, //筛选弹框
    showMenu:true,
    resource:['1'],
    hotlist: [
      {
        id:1,
        img_Url: 'https://z1.muscache.cn/im/pictures/3e23e9e5-339d-44cf-b63f-f81d1c47a0ed.jpg?aki_policy=xx_large',
        title: '客村广州塔珠江边琵琶洲',
        price: 789,
        loading: '珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        status: 1,
        headUrl:'../../../static/img/avatar.jpg',
        complete:'整套',
        mattress:2,
        nums:3,
        bright:[
          '超赞房东',
          '连住优惠'
        ]
      },
      {
        id:2,
        img_Url: 'https://z1.muscache.cn/im/pictures/5ba5fe12-8369-4ea3-9fd4-f837b6dcc6e9.jpg?aki_policy=xx_large',
        title: '客村广州塔珠江边琵琶洲',
        price: 589,
        loading: '珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        status: 1,
        headUrl: '../../../static/img/avatar.jpg',
        complete: '整套',
        mattress: 3,
        nums: 5,
        bright: [
          '超赞房东',
          '连住优惠'
        ]
      },
      {
        id:3,
        img_Url: 'https://z1.muscache.cn/im/pictures/35018640-889e-42b7-9810-7a753a0b31d0.jpg?aki_policy=xx_large',
        title: '客村广州塔珠江边琵琶洲',
        price: 1029,
        loading: '珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        status: 2,
        headUrl: '../../../static/img/avatar.jpg',
        complete: '整套',
        mattress: 2,
        nums: 4,
        bright: [
          '超赞房东',
          '连住优惠'
        ]
      }
    ],
    temp:[] //筛选条件
  },
  showData() {
    wx.navigateTo({
      url: "/pages/component/datatime/index"
    })
  },
  //获取子组件的值，更改收藏状态
  getAddInfo(e) {
    let { index} = e.detail
    //data中获取列表
    let hotlist = this.data.hotlist
    for (let i in hotlist) {
      //遍历列表数据      
      if (i == index) {
        //根据下标找到目标,改变状态  
        if (hotlist[i].status === 1) {
          hotlist[i].status = parseInt(hotlist[i].status) + 1
        }
        else{
          hotlist[i].status = parseInt(hotlist[i].status) - 1
        }
      }
    }
      //数组重新赋值
      this.setData({
        hotlist
      })
  },

  //获取筛选子组件的值
  getAddscreen(e) {
    let that = this;
    let { show,temp } = e.detail
    console.log(e.detail)
    that.setData({
      show,
      temp
    })
  },

  btnShowmenu: function () {
    var showMenu = !this.data.showMenu
    this.setData({
      showMenu
    })
  },
  //排序
  cilckSotr() {
    if (this.data.stor===1){
      let stor = 2;
      this.setData({
        stor
      })
    }
    else{
      let stor = 1;
      this.setData({
        stor
      })
    }
  },
  //筛选弹窗
  showPopup() {
    this.setData({
      show:!this.data.show
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let that = this
    let str = this.data.str
    let homeruzhuTime = wx.getStorageSync('homeruzhuTime')
    let homelikaiTime = wx.getStorageSync('homelikaiTime')
    let dataRuzhu = wx.getStorageSync('dataRuzhu')
    let dataLikai = wx.getStorageSync('dataLikai')
    if (homeruzhuTime !== that.str || homelikaiTime !== that.str) {
      that.setData({
        homeruzhuTime,
        homelikaiTime,
        dataRuzhu,
        dataLikai
      });
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