// pages/hotsearch /index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    btns:['广州塔','北京路','珠江新城','白云桥','广州南站','上下九','从化温泉','骑楼','白云广场'],
    searchRecord: []
  },
  //键盘回车确定
  searchBtn() {
    var inputVal = this.data.inputValue
    var searchRecord = this.data.searchRecord
    //将搜索值放入历史记录中,只能放前五条
    if (searchRecord.length < 5) {
      searchRecord.unshift(
        {
          value: inputVal,
          id: searchRecord.length
        }
      )
    }
    else {
      searchRecord.pop()//删掉旧的时间最早的第一条
      searchRecord.unshift(
        {
          value: inputVal,
          id: searchRecord.length
        }
      )
    }
    if (inputVal !== ''){
      //将历史记录数组整体储存到缓存中
      wx.setStorageSync('searchRecord', searchRecord)
    }
    wx.navigateTo({
      url: '/pages/hotmore/index?names=' + inputVal,
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //点击热门记录获取值跳转页面
  btnHontvalue: function (e) {
    let names = e.currentTarget.dataset.name;
    this.setData({
      inputValue: names
    })
    wx.navigateTo({
      url: '/pages/hotmore/index?names=' + names,
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
          wx.clearStorageSync('searhRecord')
          that.setData({
            searchRecord: []
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  openHistorySearch: function () {
    this.setData({
      searchRecord: wx.getStorageSync('searchRecord') || [], //若无储存则为空
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.openHistorySearch();
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
    // let history = this.data.history;
    // let path = wx.getStorageSync('history');
    // history.push(path);
    // this.setData({
    //   history
    // })
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