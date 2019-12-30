// pages/component/confirm-box/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailslist:Object
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
    clickToComfirm(){
      wx.navigateTo({
        url: '/pages/detail/place/index?details_id=' + this.data.detailslist.id + '&price=' + this.data.detailslist.price + '&yajin=' + this.data.detailslist.deposit,
      })
      console.log('去下单详情')
    },
  }
})
