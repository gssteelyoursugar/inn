// pages/hotsearch /index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    btns:['广州塔','北京路','珠江新城','白云桥','广州南站','上下九','从化温泉','骑楼','白云广场'],
    history: ['海珠广场', '楚河汉街']
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  btnHontvalue: function (e) {
    let name = e.currentTarget.dataset.name;
    console.log(e.currentTarget.dataset.name);
    this.setData({
      inputValue: name
    })
  },
  //删除历史记录
  btnDelete:function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定删除历史记录？',
      success(res) {
        if (res.confirm) {
          that.setData({
            history: ''
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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