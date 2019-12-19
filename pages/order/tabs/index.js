// pages/order/tabs/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        name: '全部'
      },
      {
        id: 2,
        name: '待支付'
      },
      {
        id: 3,
        name: '进行中'
      },
      {
        id: 4,
        name: '待评价'
      }
    ],
    curIndex: 0,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    clickTab(e) {
      let {
        index
      } = e.currentTarget.dataset
      this.setData({
        curIndex: index
      })
    },
  }
})