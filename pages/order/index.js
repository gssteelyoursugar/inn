// pages/order/index.js

import Toast from '../../vant-weapp/dist/toast/toast';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
        id: 1,
        name: '【木离】侨港银滩海景中式简约风格一居室',
        start_date: '11月03日',
        start_time: '周日 14:00',
        end_date: '11月04日',
        end_time: '周一 12:00',
        price: '316.00',
        images_url: 'https://image.xiaozhustatic3.com/00,800,533/9,0,3,5096,1800,1200,25afc714.jpg',
        status: '1'
      },
      {
        id: 2,
        name: '【木离】侨港银滩海景中式简约风格一居室',
        start_date: '11月03日',
        start_time: '周日 14:00',
        end_date: '11月04日',
        end_time: '周一 12:00',
        price: '316.00',
        images_url: 'https://image.xiaozhustatic3.com/00,800,533/51,0,59,48397,1800,1201,28c427c6.jpg',
        status: '2'
      },
    ]
  },
  // 再次预订
  clickToOrderAgain(e) {
    let {
      id
    } = e.currentTarget.dataset
    let temp = {
      order_id: id,
      user_id: 1
    }
    console.log(temp)
  },
  // 查看评论 
  clickToCheckComment(e) {
    let {
      id
    } = e.currentTarget.dataset
    let temp = {
      order_id: id,
      user_id: 1
    }
    console.log(temp)
  },
  // 删除订单
  clickToDelOrder(e) {
    let {
      id,
      index
    } = e.currentTarget.dataset
    let temp = {
      order_id: id,
      user_id: 1
    }
    let list = this.data.orderList
    list.splice(index, 1)
    this.setData({
      orderList: list
    })
    Toast('删除成功')
  },
  // 查看订单
  clickToCheckOrder(e) {
    let {
      id
    } = e.currentTarget.dataset
    let temp = {
      order_id: id,
      user_id: 1
    }
    console.log(temp)
  }
})