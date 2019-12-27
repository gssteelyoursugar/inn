// pages/orderinfo/category/index.js


import {
  OrderModel
} from '../../../api/order.js';
let list = new OrderModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList: [{
        id: 1,
        name: '电器',
        logo: '../../../static/img/electric.png'
      },
      {
        id: 2,
        name: '厨房',
        logo: '../../../static/img/kitchen.png'
      },
      {
        id: 3,
        name: '设施',
        logo: '../../../static/img/facility.png'
      },
      {
        id: 4,
        name: '卫浴',
        logo: '../../../static/img/bath.png'
      },
      {
        id: 5,
        name: '服务',
        logo: '../../../static/img/service.png'
      },
      {
        id: 6,
        name: '其他',
        logo: '../../../static/img/else.png'
      },
    ],
    electrical_id:undefined,
  },

  // 点击分类
  clickToVideo(e) {
    let {
      cate_id
    } = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/orderinfo/electrical/index?electrical_id=' + this.data.electrical_id + '&type=' + cate_id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.electrical_id = options.electrical_id
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '请选择分类'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})