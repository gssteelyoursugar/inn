// pages/hotmore/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMenu:true,
    resource:['1'],
    hotlist: [
      {
        img_Url: 'https://z1.muscache.cn/im/pictures/3e23e9e5-339d-44cf-b63f-f81d1c47a0ed.jpg?aki_policy=xx_large',
        title: '客村广州塔珠江边琵琶洲',
        price: 789,
        loading: '珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        showCollect: 2,
        headUrl:''
      },
      {
        img_Url: 'https://z1.muscache.cn/im/pictures/5ba5fe12-8369-4ea3-9fd4-f837b6dcc6e9.jpg?aki_policy=xx_large',
        title: '客村广州塔珠江边琵琶洲',
        price: 589,
        loading: '珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        showCollect: 1

      },
      {
        img_Url: 'https://z1.muscache.cn/im/pictures/35018640-889e-42b7-9810-7a753a0b31d0.jpg?aki_policy=xx_large',
        title: '客村广州塔珠江边琵琶洲',
        price: 1029,
        loading: '珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        showCollect: 2

      }
    ]
  },

  btnShowmenu: function () {
    var showMenu = !this.data.showMenu
    this.setData({
      showMenu
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