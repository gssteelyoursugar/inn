// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576573759034&di=7ceed9a4bc64ccc821f3626cbaf10e5a&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F202%2Fw1080h722%2F20180426%2F_sKr-fztkpin7965380.jpg',
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576581601820&di=1829c356b00b0b9bd63121e2dddca558&imgtype=0&src=http%3A%2F%2F7q5evw.com1.z0.glb.clouddn.com%2Fimages%2Farticle%2FFupRisSnP5NcI6L4SKBeIUiLH3KK.jpg%3FimageView2%2F1%2Fw%2F1556%2Fh%2F914',
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576581601811&di=67dcb59de60647a0592300d3772ef7a8&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180316%2F5b9ab034b4cd4a78942e12c9c3a28e3f.jpeg'
      ],
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    previousMargin:'50rpx',
    nextMargin:'50rpx',
    currentIndex: 0,
    housing:[
      {
        img_Url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576581601820&di=1829c356b00b0b9bd63121e2dddca558&imgtype=0&src=http%3A%2F%2F7q5evw.com1.z0.glb.clouddn.com%2Fimages%2Farticle%2FFupRisSnP5NcI6L4SKBeIUiLH3KK.jpg%3FimageView2%2F1%2Fw%2F1556%2Fh%2F914',
        title:'客村广州塔珠江边琵琶洲',
        price:789,
        loading:'珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        showCollect:1
      },
      {
        img_Url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576581601811&di=67dcb59de60647a0592300d3772ef7a8&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180316%2F5b9ab034b4cd4a78942e12c9c3a28e3f.jpeg',
        title: '客村广州塔珠江边琵琶洲',
        price: 589,
        loading: '珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        showCollect: 1

      },
      {
        img_Url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576590897226&di=1dca410f1075c2e7c343e56e9ae3a0b5&imgtype=0&src=http%3A%2F%2Fimg3.selfimg.com.cn%2Fprnnews%2F2018%2F04%2F10%2Fbb0f4a234dca556ab19b0fa49cb907d3.jpg',
        title: '客村广州塔珠江边琵琶洲',
        price: 1029,
        loading: '珠海区滨江东路1024-1012号珠海区滨江东路1024-1012号',
        showCollect: 1

      }
    ],
    vertical2: false,
    interval2: 2000,
    duration2: 500,
    nextMargin2: '180rpx',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
  //跳转热门搜索
  hotSearch: function() {
    wx.navigateTo({
      url:'/pages/hotsearch/index'
    })
  },
  //收藏房源成功
  btnSucceed: function () {
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    })
  },
  //收藏房源成功
  btnCancel: function () {
    wx.showToast({
      title: '收藏取消',
      icon: 'success',
      duration: 2000
    })
  },
  //查看更多房源
  toggleHotmore: function () {
    wx.navigateTo({
      url: '/pages/hotmore/index'
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