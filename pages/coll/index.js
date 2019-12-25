// pages/coll/index.js


import { HomeModel } from '../../api/home.js';
let homemodel = new HomeModel();
import {
  CityModel
} from '../../api/city.js';
let list = new CityModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotlist:[],
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
    var user = wx.getStorageSync('userInfo')
    var temp={
      user_id:user.id
    }
    homemodel.GetCollectByList(temp,res=>{
      this.setData({
        hotlist:res
      })
    })
  },


  getAddInfo(e) {
    let { index, show_id } = e.detail
    var temp = {
      user_id: 1,
      housing_id: show_id
    }
    list.PostDataByCollection(temp, res => {
    })

    let hlist = this.data.hotlist
    hlist.splice(index, 1)
    this.setData({
      hotlist: hlist
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