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
    //收藏房源成功,取消收藏
    btnSucceed: function (e) {
      let { show_id, index, nums } = e.currentTarget.dataset
      this.triggerEvent('addInfo', { index, show_id})//通过triggerEvent将参数传给父组件
      if(nums==='1') {
        wx.showToast({
          title: '收藏成功',
          icon: 'success',
          duration: 2000
        })
      }
      else{
        wx.showToast({
          title: '收藏取消',
          icon: 'success',
          duration: 2000
        })
      }
      
    },
    //点击查看房源
    toggleDetails(e) {
      let details_id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/detail/index'
      })
    }
  }
})