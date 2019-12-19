// pages/hotmore/hotlist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotlist: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    }
  }
})
