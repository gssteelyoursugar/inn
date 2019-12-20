// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    iconList: [
      {
        id: 1,
        url: '../../static/img/icon1.png',
        name: '收藏'
      },
      {
        id: 2,
        url: '../../static/img/icon2.png',
        name: '优惠券'
      },
      {
        id: 3,
        url: '../../static/img/icon3.png',
        name: '邀请好友'
      },
      {
        id: 4,
        url: '../../static/img/icon4.png',
        name: '积分'
      },
      {
        id: 5,
        url: '../../static/img/icon5.png',
        name: '反馈'
      },
      {
        id: 6,
        url: '../../static/img/icon6.png',
        name: '帮助'
      },
    ]
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
    let userinfo=wx.getStorageSync('userInfo');
    this.setData({
      userinfo:userinfo
    })
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