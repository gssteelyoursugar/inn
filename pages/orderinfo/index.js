// pages/orderinfo/index.js

var util = require("../../utils/Time.js")

const app = getApp();
const base_path = '../../images/home/';
// 这是该页面对应的 “路径前缀”
import {
  OrderModel
} from '../../api/order.js';
let list = new OrderModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myorder:{},
    bar_url:'',
    id:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      this.setData({
        id:options.id
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
    var that = this;
    var id = this.data.id;
    var bar_url = app.globalData.bar_url;
    list.postOrderpay(id, res => {

      var in_titme = util.getDates(1, util.formatDate(new Date(res.inTime * 1000)));
      console.log(in_titme)
      res.in_time = in_titme[0].week
      res.inTime = in_titme[0].time
      var out_Time = util.getDates(1, util.formatDate(new Date(res.outTime * 1000)));
      
      res.out_time = out_Time[0].week
      res.outTime = out_Time[0].time
      that.setData({
        myorder: res
      })
      console.log(that.data.myorder)
    })
    that.setData({
      bar_url: bar_url
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