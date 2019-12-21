// pages/hotmore/screen/index.js
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
    hot: ['近地铁', '优惠', '房东好', '市中心', '娱乐中心','近菜市场'],
    change: false, // 当两个slider在最右端重合时，将change设置为true，从而隐藏slider2，才能继续操作slider1
    max: 10000, // 两个slider所能达到的最大值
    min: 0, // 两个slider所能取的最小值
    rate: 100, // slider的最大最小值之差和100（或1000）之间的比率
    scale: 1, // 比例系数。页面显示值的时候，需要将slider1Value(slider2Value)乘以比例系数scale
    slider1Max: 10000, // slider1的最大取值
    slider1Value: 0, // slider1的值
    slider2Value: 10000, // slider2的值
    slider2Min: 0, // slider2的最小取值
    slider1W: 100, // slider1的宽度
    slider2W: 0, // slider2的宽度
    leftSliderPriceWidthX: '-1.5%',
    rightSliderPriceWidthX: '-21%',
    checkboxArr: [{
      name: '选项A',
      checked: false
    }, {
      name: '选项B',
      checked: false
    }, {
      name: '选项C',
      checked: false
    }, {
      name: '选项D',
      checked: false
    }, {
      name: '选项E',
      checked: false
    }, {
      name: '选项F',
      checked: false
    }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 开始滑动
    changeStart: function (e) {
      var idx = parseInt(e.currentTarget.dataset.idx)
      if (idx === 1) {
        // dW是当前操作的slider所能占据的最大宽度百分数
        var dW = (this.data.slider2Value - this.data.min) / this.data.rate
        this.setData({
          slider1W: dW,
          slider2W: 100 - dW,
          slider1Max: this.data.slider2Value,
          slider2Min: this.data.slider2Value,
          change: false
        })
      } else if (idx === 2) {
        var dw = (this.data.max - this.data.slider1Value) / this.data.rate
        this.setData({
          slider2W: dw,
          slider1W: 100 - dw,
          slider1Max: this.data.slider1Value,
          slider2Min: this.data.slider1Value,
          change: false
        })
      }
    },
    // 正在滑动
    changing: function (e) {
      var idx = parseInt(e.currentTarget.dataset.idx)
      var value = e.detail.value
      let rightSliderPriceWidthX = (this.data.max - value) / 116 - 21
      let leftSliderPriceWidthX = value / 116
      if (idx === 1) {
        this.setData({
          slider1Value: value,
          leftSliderPriceWidthX: leftSliderPriceWidthX + '%'
        })
      } else if (idx === 2) {
        this.setData({
          slider2Value: value,
          rightSliderPriceWidthX: rightSliderPriceWidthX + '%'
        })
      }
    },
    changed: function (e) {
      if (this.data.slider1Value === this.data.slider2Value && this.data.slider2Value === this.data.max) {
        this.setData({
          change: true
        })
      }
    }
  }
})
