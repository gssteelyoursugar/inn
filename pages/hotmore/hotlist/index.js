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
    curIndex: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //收藏房源成功
    btnSucceed(e) {
      let room_id = e.currentTarget.dataset.show_id
      let temp = {
        room_id,
        user_id: 1
      }
      console.log(temp);
      // 回调函数
      // this.setData({ show: res.data.status})
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 2000
      })
    },
    //收藏房源成功
    btnCancel: function() {
      let room_id = e.currentTarget.dataset.show_id
      let temp = {
        room_id,
        user_id: 1
      }
      wx.showToast({
        title: '收藏取消',
        icon: 'success',
        duration: 2000
      })
    }
  }
})