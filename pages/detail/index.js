// pages/detail/index.js
import { getWeek } from '../../api/user.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    is_realname: false,//是否实名注册
    homeruzhuTime: '',//入住时间
    homelikaiTime: '',//离店时间
    wan: 0,// 默认0晚
    inWeek: '',
    outWeek: '',
    str: '', //用来判断页面数据
    star: 5,
    swiperList: [
      {
        id: 1,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_191021/thumb/201910210014561336_1100_733.jpg'
      },
      {
        id: 2,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_191021/thumb/201910210008014002_1100_733.jpg'
      },
      {
        id: 3,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_191021/thumb/201910210008053276_1100_733.jpg'
      },
      {
        id: 4,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_191021/thumb/201910210008284436_1100_733.jpg'
      },
    ],
    interval: 1500,
    circular: true,
    showBox: true,
    tabs:['详情','点评','须知','推荐'],
    curIndex: 0,
    showMoreText: false,
    star:5,
    user_star: 5,
  },

  clickTabs(e){
    let {index} = e.currentTarget.dataset
    this.setData({ curIndex: index})
  },

  toggleMoreText() {
    this.setData({ showMoreText: !this.data.showMoreText})
  },
  // 
  preventPop() {
    return;
  },

  clickToPickTime() {
    wx.navigateTo({
      url: '/pages/component/datatime/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let query = wx.createSelectorQuery();
    query.select('.more-detail-bar').boundingClientRect(res => { //获取元素1距离页面顶部高度
    }).exec()

    var userInfo = wx.getStorageSync('userInfo')
    if (userInfo.realname === null) {
      this.setData({
        is_realname: false
      })
    } else {
      this.setData({
        is_realname: true
      })
    }
    let that = this;
    let homeruzhuTime = wx.getStorageSync('dataRuzhu')
    let homelikaiTime = wx.getStorageSync('dataLikai')
    let wan = wx.getStorageSync('wan')
    let inWeek = new Date(homeruzhuTime).getDay()
    let outWeek = new Date(homelikaiTime).getDay()
    if (homeruzhuTime !== that.str || homelikaiTime !== that.str) {
      console.log(inWeek, outWeek) 
      that.setData({
        homeruzhuTime: homeruzhuTime.substring(5),
        homelikaiTime: homelikaiTime.substring(5),
        wan,
        inWeek,
        outWeek
      });
    }
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