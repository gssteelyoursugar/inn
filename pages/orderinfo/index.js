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
    markers:[],

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

      that.setData({ // 获取返回结果，放到markers及poi中，并在地图展示
        markers: [{
          id: 0,
          title: res.get_housing.title,
          latitude: res.loca.lat,
          longitude: res.loca.lng,
          iconPath: '../../static/img/location2-icon.png', //图标路径
          width: 30,
          height: 30
        }],
        poi: { //根据自己data数据设置相应的地图中心坐标变量名称
          latitude: res.loca.lat,
          longitude: res.loca.lng,
        }
      });
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

  },
  gotohere: function () {
    var that=this;
    wx.openLocation({ // 打开微信内置地图，实现导航功能（在内置地图里面打开地图软件）
      latitude: that.data.myorder.loca.lat,
      longitude: that.data.myorder.loca.lng,
      name: that.data.myorder.get_housing.title,
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  handelElectrical() {
    var that = this;
    var electrical_id = that.data.myorder.get_housing.electrical_id
    wx.navigateTo({
      url: '/pages/orderinfo/category/index?electrical_id=' + electrical_id
    })
  },
  handelGuide() {
    var that = this;
    var guide_id = that.data.myorder.get_housing.guide_id
    wx.navigateTo({
      url: '/pages/orderinfo/electrical/index?electrical_id=' + guide_id
    })
  },
  toEva(){
    wx.navigateTo({
      url: '/pages/eva/index?order_id=' + this.data.myorder.id + '&housing_id=' + this.data.myorder.housing_id,
    })
    console.log(this.data.myorder)
    // housing_id: 0,
    //   order_id: 0,
  }
})