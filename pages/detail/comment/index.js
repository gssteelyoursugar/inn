// pages/detail/comment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectItem: [{
        id: 1,
        name: '全部',
        count: '81'
      },
      {
        id: 2,
        name: '房间挺好',
        count: '10'
      },
      {
        id: 3,
        name: '有图',
        count: '45'
      },
      {
        id: 4,
        name: '下次还想入住',
        count: '40'
      },
      {
        id: 5,
        name: '交通便利',
        count: '20'
      },
      {
        id: 6,
        name: '房间干净',
        count: '32'
      },
      {
        id: 7,
        name: '服务不错',
        count: '21'
      },
      {
        id: 8,
        name: '附近有公交车站',
        count: '23'
      },
    ],
    curItem: 0,
    is_more: false
  },

  clickToSelect(e) {
    let {
      index
    } = e.currentTarget.dataset
    this.setData({
      curItem: index
    })
    console.log(index)
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
    wx.setNavigationBarTitle({
      title: '用户点评'
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