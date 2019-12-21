// pages/city/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList:[
      {
        name:'北海',
        img_Url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3634429336,1511536568&fm=26&gp=0.jpg',
        en:'Beihai'
      },
      {
        name: '南宁',
        img_Url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2684620922,2038374627&fm=26&gp=0.jpg',
        en:'Nanning'
      },
      {
        name: '桂林',
        img_Url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2791850941,2670649523&fm=26&gp=0.jpg',
        en:'Guilin'
      },
      {
        name: '柳州',
        img_Url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576921332519&di=b3c1c3b180564a48c71b5e0ad7fd955e&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F555%2Fw600h755%2F20180605%2F9193-hcqccin6377675.jpg',
        en:'Liuzhou'
      },
      {
        name: '钦州',
        img_Url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576921711448&di=0c0c641972d103b29f3e8ab10ace694e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20170527%2F116dc055520d46cb80fda1178e9f6feb_th.jpg',
        en:'Qinzhou'
      }
      
    ]
  },

  //获取到城市
  toggleCity(e) {
    let nameCity  = e.currentTarget.dataset.name;
    wx.setStorage({
      key: 'nameCity',
      data: nameCity
    })
    //返回上一页
    wx.navigateBack({
      delta: 1
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