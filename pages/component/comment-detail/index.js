// pages/component/comment-detail/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    is_more: {
      type: Boolean,
      default: false
    },
    list:{
      type:Array
    }
  },
  ready() {
    console.log(this.data.commentList)
  },
  /**
   * 组件的初始数据
   */
  data: {

    commentList: [
    
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})