// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      console.log(res)
    }).exec() 
    wx.getSystemInfo({ //获取屏幕高度
      success: (res => {
        console.log(res)
      })
    })
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