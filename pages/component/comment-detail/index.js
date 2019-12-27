// pages/component/comment-detail/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    is_more: {
      type: Boolean,
      default: false
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
      {
      id: 1,
      content: '一来到北海就觉得这里的冬天咋这么热！在海边看日落真的很美、没白来这一次、主要房东姐姐给我介绍的房间还很漂亮！很开心！下次还来这家！',
      user_star: '5.0',
      photo: [{
          id: 1,
          image_url: 'https://pic.tujia.com/upload/comment/day_191222/thumb/201912221708551433_1280_1280.jpg'
        },
        {
          id: 2,
          image_url: 'https://pic.tujia.com/upload/comment/day_191222/thumb/201912221708349504_1280_1280.jpg'
        },
        {
          id: 3,
          image_url: 'https://pic.tujia.com/upload/comment/day_191222/thumb/201912221708301489_1280_1280.jpg'
        },
      ],
      create_time: '2019-11-24',
      user: [{
        id: 1,
        username: '狗剩哥哥',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/URfj8cCn1XVrN1piaeqwDT1J8Z3JE0zag5la1ibichrzy6lakZeb7L25kXwmZKdP61XBhicQ5NmmQoP0SPFf1grIbw/132',
      }],
      }, 
      {
        id: 2,
        content: '一来到北海就觉得这里的冬天咋这么热！在海边看日落真的很美、没白来这一次、主要房东姐姐给我介绍的房间还很漂亮！很开心！下次还来这家！',
        user_star: '4.0',
        photo: [{
          id: 4,
          image_url: 'https://pic.tujia.com/upload/comment/day_191222/thumb/201912221708551433_1280_1280.jpg'
        },
        {
          id: 5,
          image_url: 'https://pic.tujia.com/upload/comment/day_191222/thumb/201912221708349504_1280_1280.jpg'
        },
        {
          id: 6,
          image_url: 'https://pic.tujia.com/upload/comment/day_191222/thumb/201912221708301489_1280_1280.jpg'
        },
        {
          id: 7,
          image_url: 'https://pic.tujia.com/upload/comment/day_191222/thumb/201912221649033811_1280_1280.jpg'
        },
          {
            id: 8,
            image_url: 'https://pic.tujia.com/upload/comment/day_191222/thumb/201912221649033811_1280_1280.jpg'
          },
        ],
        create_time: '2019-11-24',
        user: [{
          id: 2,
          username: '狗剩妹妹',
          avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/URfj8cCn1XVrN1piaeqwDT1J8Z3JE0zag5la1ibichrzy6lakZeb7L25kXwmZKdP61XBhicQ5NmmQoP0SPFf1grIbw/132',
        }],
      }, 
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})