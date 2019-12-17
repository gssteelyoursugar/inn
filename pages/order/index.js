// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        name: '全部'
      },
      {
        id: 2,
        name: '待支付'
      },
      {
        id: 3,
        name: '进行中'
      },
      {
        id: 4,
        name: '待评价'
      }
    ],
    curIndex: 0,
    orderList: [{
        id: 1,
        images_url: 'https://pic.tujia.com/upload/qualifiedpics/day_170309/thumb/201703091559599852_370_232.jpg',
        name: '田涧小苑度假别墅',
        price: '939',
        locate: '北观世界侨商中心',
        days: '3',
        people: '5',
        rate: '4.8',
        status: 1
      },
      {
        id: 2,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_180715/thumb/201807152038196550_370_232.jpg',
        name: '五角场时尚小公馆',
        price: '367',
        locate: '北观世界侨商中心',
        days: '1',
        people: '2',
        rate: '',
        status: 2
      },
      {
        id: 3,
        images_url: 'https://pic.tujia.com/upload/qualifiedpics/day_170311/thumb/201703110854137386_580_358.jpg',
        name: '大梅沙海景房',
        price: '269',
        locate: '北观世界侨商中心',
        days: '3',
        people: '5',
        rate: '',
        status: 3
      },
      {
        id: 4,
        images_url: 'https://pic.tujia.com/upload/qualifiedpics/day_170310/thumb/20170310104005324_370_232.jpg',
        name: '同济 五角场精装一房',
        price: '239',
        locate: '北观世界侨商中心',
        days: '3',
        people: '5',
        rate: '',
        status: 4
      },
    ]
  },
  clickTab(e) {
    let {
      index
    } = e.currentTarget.dataset
    this.setData({
      curIndex: index
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