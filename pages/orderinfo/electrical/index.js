// pages/sales/myorder/electrical/index.js

import {
  OrderModel
} from '../../../api/order.js';
let list = new OrderModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    listdata: [],
    show: false

  },



  showPopup(e) {
    this.setData({ show: true, url: e.currentTarget.dataset.url });
  },

  onClose() {
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var temp={
      electrical_id:options.electrical_id,
      type:options.type
    }
    list.GetVideoByList(temp, res => {
      that.setData({
        listdata: res
      })
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